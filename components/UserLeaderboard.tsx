import styles from "../styles/Users.module.css";
import useSWR from "swr";
import Link from "next/link";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const UserLeaderboard= (props) => {
    const [page, pageSwitch] = useState(1);
    let history = useHistory();
    var link;
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const fetcher = (url) => fetch(url).then((r) => r.json());
    switch (props.type) {
        case "user":
            link = `users/topscores/${props.id}/scores/10/${page}`
            break;

        case "recent":
            link = `users/recent/${page}`
            break;
    }

    const { data, error } = useSWR(`https://api.challengepoints.net/api/${link}`, fetcher);

    if (error) return <div>failed to load</div>;
    if (!data) return <div>loading...</div>;
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
                        <th scope="col" />
                    </tr>
                </thead>
                <tbody>
                    {data.map((key, index) => {
                        var unix = key['time']
                        if (key['diff'] == 'expert+') { key['diff'] = 'expertplus'}
                        var date = new Date(unix * 1000)
                        if (index % 2 == 0) {
                            return (
                                <tr onClick={() => window.location.href=`/maps/map?hash=${key['map_hash']}&diff=${key['diff']}`} key={index} className="p-2 px-3 rounded bg-blue-900 bg-opacity-25 hover:bg-white hover:bg-opacity-10 cursor-pointer">
                                    <td />
                                    <td scope="row" data-label="#"><h4>{String(index + 1)}</h4></td>
                                    <td data-label="Map" >{key['name']}</td>
                                    <td data-label="CP"><h4>{key['cp']}</h4></td>
                                    <td data-label="Score"><h4>{key['score']}</h4></td>
                                    <td data-label="Time"><h4>{date.getDate() + '-' + months[date.getMonth()] + '-' + date.getFullYear()}</h4></td>
                                    <td />
                                </tr>
                            )
                        }
                        else {
                            return (
                                <tr onClick={() => window.location.href=`/maps/map?hash=${key['map_hash']}&diff=${key['diff']}`} key={index} className="p-2 px-3 rounded bg-opacity-25 hover:bg-white hover:bg-opacity-10 cursor-pointer">
                                    <td />
                                    <td scope="row" data-label="#"><h4>{String(index + 1)}</h4></td>
                                    <td data-label="Map" >{key['name']}</td>
                                    <td data-label="CP"><h4>{key['cp']}</h4></td>
                                    <td data-label="Score"><h4>{key['score']}</h4></td>
                                    <td data-label="Time"><h4>{date.getDate() + '-' + months[date.getMonth()] + '-' + date.getFullYear()}</h4></td>
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

export default UserLeaderboard;
