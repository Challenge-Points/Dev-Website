import styles from "../styles/Users.module.css";
import Link from "next/link";
import useSWR from "swr";
import React, { useState } from "react";

const MapLeaderboard= (props) => {
    const [page, pageSwitch] = useState(1);
    const fetcher = (url) => fetch(url).then((r) => r.json());
    var diff = ((props.diff.toLowerCase() == 'expert+') ? 'expertplus' : props.diff)
    const { data, error } = useSWR(`https://api.challengepoints.net/api/maps/mapscores/${props.hash}/${diff}/scores/20/${page}`, fetcher);      // Second API
    
    if (error) return <div>failed to load</div>;
    if (!data) return <div>loading...</div>;

    var keys = Object.keys(data).map(String);

    return (
    <pre>
        <div>
            <hr />
            <table className={styles.userTable}>
                <thead>
                    <tr>
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
                    </tr>
                </thead>
                <tbody>
                {keys.map((key, index) => {
                    if (index % 2 == 0) {
                        return (
                            <tr onClick={() => history.push(`../../users/${data[key].user_id}`)} key={index} className="p-2 px-3 bg-blue-700 bg-opacity-5 hover:bg-opacity-10 rounded">
                                <td>{index + 1}</td>
                                <td>{data[key].username}</td>
                                <td>{data[key].cp}</td>
                                <td>{data[key].score}</td>
                            </tr>
                        )
                    }
                    else {
                        return (
                            <tr onClick={() => history.push(`../../users/${data[key].user_id}`)} key={index} className="p-2 px-3 bg-blue-500 bg-opacity-5 hover:bg-opacity-10 rounded">
                                <td>{index + 1}</td>
                                <td>{data[key].username}</td>
                                <td>{data[key].cp}</td>
                                <td>{data[key].score}</td>
                            </tr>
                        )
                    }
                    })}
                    <tr>
                        <td>
                            <div className="pageleft">
                                <button onClick={() => pageSwitch((page != 1) ? page - 1 : page)}>^</button>
                            </div>
                        </td>
                        <td />
                        <td />
                        <td>
                            <div className="pageright">
                                <button onClick={() => pageSwitch(page + 1)}>^</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <hr />
        </div>
    </pre>
    );
};

export default MapLeaderboard;
