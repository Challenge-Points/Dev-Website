import styles from "../styles/Users.module.css";
import Link from "next/link";
import useSWR from "swr";

const MapLeaderboard= (props) => {
    const fetcher = (url) => fetch(url).then((r) => r.json());
    //const { data, error } = useSWR(`https://challenge-points-dev.herokuapp.com/api/maps/${props.hash}/scores/20`, fetcher);  // First API
    const { data, error } = useSWR(`https://challengepointsapi.herokuapp.com/api/maps/${props.hash}/scores/20`, fetcher);      // Second API
    
    if (error) return <div>failed to load</div>;
    if (!data) return <div>loading...</div>;
    const keys = Object.keys(data).map(String);
    console.log(data)

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
                        <b>Username</b>
                    </td>
                    <td>
                        <b>CP</b>
                    </td>
                    <td>
                        <b>Score</b>
                    </td>
                </thead>
                <tbody>
                {keys.map((key, index) => {
                        return (
                            <tr>
                                <td><Link href={`../../users/user?id=${data[key].user_id}`}><a className="p-2 px-3 bg-white bg-opacity-0 hover:bg-opacity-10 rounded">{index + 1}</a></Link></td>
                                <td><Link href={`../../users/user?id=${data[key].user_id}`}><a className="p-2 px-3 bg-white bg-opacity-0 hover:bg-opacity-10 rounded">{data[key].name}</a></Link></td>
                                <td><Link href={`../../users/user?id=${data[key].user_id}`}><a className="p-2 px-3 bg-white bg-opacity-0 hover:bg-opacity-10 rounded">{data[key].cp}</a></Link></td>
                                <td><Link href={`../../users/user?id=${data[key].user_id}`}><a className="p-2 px-3 bg-white bg-opacity-0 hover:bg-opacity-10 rounded">{data[key].score}</a></Link></td>
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

export default MapLeaderboard;
