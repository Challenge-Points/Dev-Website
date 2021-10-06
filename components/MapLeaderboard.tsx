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
                        return (
                            <tr key={index}>
                                <td><Link href={`../../users/${data[key].user_id}`}><a className="p-2 px-3 bg-white bg-opacity-0 hover:bg-opacity-10 rounded">{index + 1}</a></Link></td>
                                <td><Link href={`../../users/${data[key].user_id}`}><a className="p-2 px-3 bg-white bg-opacity-0 hover:bg-opacity-10 rounded">{data[key].username}</a></Link></td>
                                <td><Link href={`../../users/${data[key].user_id}`}><a className="p-2 px-3 bg-white bg-opacity-0 hover:bg-opacity-10 rounded">{data[key].cp}</a></Link></td>
                                <td><Link href={`../../users/${data[key].user_id}`}><a className="p-2 px-3 bg-white bg-opacity-0 hover:bg-opacity-10 rounded">{data[key].score}</a></Link></td>
                            </tr>
                        )
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
