import styles from "../styles/Users.module.css";
import useSWR from "swr";
import Link from "next/link";

const UserLeaderboard= (props) => {
    var link;
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const fetcher = (url) => fetch(url).then((r) => r.json());
    switch (props.type) {
        case "user":
            link = `users/${props.id}/scores/10`
            break;

        case "recent":
            link = `users/recent/1`
            break;
    }

    //const { data, error } = useSWR(`https://challenge-points-dev.herokuapp.com/api/${link}`, fetcher);  // First API
    const { data, error } = useSWR(`https://challengepointsapi.herokuapp.com/api/${link}`, fetcher);      // Second API

    if (error) return <div>failed to load</div>;
    if (!data) return <div>loading...</div>;
    return (
    <pre>
        <div>
            <hr />
            <table className={styles.userTable}>
                <thead>
                    <tr>
                        <th scope="col">
                            <b>#</b>
                        </th>
                        <th scope="col">
                            <b>Map</b>
                        </th>
                        <th scope="col">
                            <b>CP</b>
                        </th>
                        <th scope="col">
                            <b>Score</b>
                        </th>
                        <th scope="col">
                            <b>Time</b>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((key, index) => {
                        var unix = key['time']
                        var date = new Date(unix * 1000)
                        return (
                            <tr>
                                <td scope="row" data-label="#"><h4>{String(index + 1)}</h4></td>
                                <td data-label="Map" ><Link href={`/maps/map?hash=${key['map_hash']}`}><a className="p-2 px-3 bg-white bg-opacity-0 hover:bg-opacity-10 rounded">{key['name']}</a></Link></td>
                                <td data-label="CP"><h4>{key['cp']}</h4></td>
                                <td data-label="Score"><h4>{key['score']}</h4></td>
                                <td data-label="Time"><h4>{date.getDate() + '-' + months[date.getMonth()] + '-' + date.getFullYear()}</h4></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <hr />
        </div>
    </pre>
    );
};

export default UserLeaderboard;
