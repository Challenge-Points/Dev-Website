import styles from "../styles/Users.module.css";
import useSWR from "swr";

const UserLeaderboard= (props) => {
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const fetcher = (url) => fetch(url).then((r) => r.json());
	//const { data, error } = useSWR(`https://challenge-points-dev.herokuapp.com/api/users/${props.id}/scores/10`, fetcher);  // First API
    const { data, error } = useSWR(`https://challengepointsapi.herokuapp.com/api/users/${props.id}/scores/10`, fetcher);      // Second API

    if (error) return <div>failed to load</div>;
    if (!data) return <div>loading...</div>;
    return (
    <pre>
        <div>
            <hr />
            <table className={styles.userTable}>
                <thead>
                    <td>
                        <b>#</b>
                    </td>
                    <td>
                        <b>Map</b>
                    </td>
                    <td>
                        <b>CP</b>
                    </td>
                    <td>
                        <b>Score</b>
                    </td>
                    <td>
                        <b>Time</b>
                    </td>
                </thead>
                <tbody>
                    {data.map((key, index) => {
                        var unix = key['time']
                        var date = new Date(unix * 1000)
                        return (
                            <tr>
                                <td><h4>{String(index + 1)}</h4></td>
                                <td><h4>{key['name']}</h4></td>
                                <td><h4>{key['cp']}</h4></td>
                                <td><h4>{key['score']}</h4></td>
                                <td><h4>{date.getDate() + '-' + months[date.getMonth()] + '-' + date.getFullYear()}</h4></td>
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
