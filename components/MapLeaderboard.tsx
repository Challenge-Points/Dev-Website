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
                                <td><h4>{index + 1}</h4></td>
                                <td><Link href={`../../users/user?id=${data[key].user_id}`}>{data[key].name}</Link></td>
                                <td><h4>{data[key].cp}</h4></td>
                                <td><h4>{data[key].score}</h4></td>
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
