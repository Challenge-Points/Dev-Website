import styles from "../styles/Users.module.css";
import useSWR from "swr";

const UserLeaderboard= (props) => {
    const fetcher = (url) => fetch(url).then((r) => r.json());
	//const { data, error } = useSWR(`https://challenge-points-dev.herokuapp.com/api/users/${router.query.id}/scores`, fetcher);  // First API
    const { data, error } = useSWR(`https://challengepointsapi.herokuapp.com/api/users/${props.id}/scores`, fetcher);      // Second API

    if (error) return <div>failed to load</div>;
    if (!data) return <div>loading...</div>;
    //getDiscord()
    //const keys = Object.keys(props.scores).map(String);
    console.log(props)
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
                </thead>
                <tbody>
                    {/*keys.map((key) => {
                        return (
                            <tr>
                                <td><h4>{props.scores[key].rank}</h4></td>
                                <td><h4>{key}</h4></td>
                                <td><h4>{props.scores[key].cp}</h4></td>
                                <td><h4>{props.scores[key].score}</h4></td>
                            </tr>
                        )
                    })*/}
                </tbody>
            </table>
            <hr />
        </div>
    </pre>
    );
};

export default UserLeaderboard;
