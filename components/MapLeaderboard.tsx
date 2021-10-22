import styles from "../styles/Users.module.css";
import Link from "next/link";
import useSWR from "swr";
import React, { useState } from "react";
import { useHistory } from 'react-router-dom';

const MapLeaderboard = (props) => {
    const history = useHistory();
    const [page, pageSwitch] = useState(1);
    console.log(history)
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
                        <th scope="col" />
                        <th scope="col">
                            <b>#</b>
                        </th>
                        <th scope="col">
                            <b>Username</b>
                        </th>
                        <th scope="col">
                            <b>CP</b>
                        </th>
                        <th scope="col">
                            <b>Score</b>
                        </th>
                        <th scope="col" />
                    </tr>
                </thead>
                <tbody>
                {keys.map((key, index) => {
                    if (index % 2 == 0) {
                        return (
                            <tr onClick={() => window.location.href=`../../users/${data[key].user_id}`} key={index} className="p-2 px-3 rounded bg-blue-900 bg-opacity-50 hover:bg-white hover:bg-opacity-10 cursor-pointer">
                                <td />
                                <td>{index + 1}</td>
                                <td>{data[key].username}</td>
                                <td>{data[key].cp}</td>
                                <td>{data[key].score}</td>
                                <td />
                            </tr>
                        )
                    }
                    else {
                        return (
                            <tr onClick={() => window.location.href=`../../users/${data[key].user_id}`} key={index} className="p-2 px-3 rounded bg-opacity-50 hover:bg-white hover:bg-opacity-10 cursor-pointer">
                                <td />
                                <td>{index + 1}</td>
                                <td>{data[key].username}</td>
                                <td>{data[key].cp}</td>
                                <td>{data[key].score}</td>
                                <td />
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
