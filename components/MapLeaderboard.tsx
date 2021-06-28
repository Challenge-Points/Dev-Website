import useSWR from "swr";
import axios from "axios";
import styles from "../styles/Users.module.css";

function getDiscord() {
    const dcfetcher = (url, token) =>
    axios
      .get(url, { headers: { Authorization: "Bot " + token } })
      .then((res) => res.data);

    const { data, error } = useSWR([`https://discord.com/api/users/490534335884165121`, `ODEzNjkxNjE5MTczMzM1MDQx.YDS_Xw.2DcVQxJuW4AK1BnIKOvA_G90XQ8`], dcfetcher);
    
    if (error) console.log(error);
    if (data) console.log(data);
}

const MapLeaderboard= (props) => {
    getDiscord()
    const keys = Object.keys(props.scores).map(String);
    console.log()
    return (
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
                    {keys.map((key) => {
                        return (
                            <tr>
                                <td><h4>{props.scores[key].rank}</h4></td>
                                <td><h4>{key}</h4></td>
                                <td><h4>{props.scores[key].cp}</h4></td>
                                <td><h4>{props.scores[key].score}</h4></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <hr />
        </div>
    );
};

export default MapLeaderboard;
