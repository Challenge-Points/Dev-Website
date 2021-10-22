import styles from "../styles/Users.module.css";
import useSWR from "swr";
import Link from "next/link";
import React, { useState } from "react";

const UserLeaderboard= (props) => {
    const [page, pageSwitch] = useState(1);
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
                        if (key['diff'] == 'expert+') { key['diff'] = 'expertplus'}
                        var date = new Date(unix * 1000)
                        return (
                            <tr key={index}>
                                <Link href={`/maps/map?hash=${key['map_hash']}&diff=${key['diff']}`}><a className="p-2 px-3 bg-white bg-opacity-0 hover:bg-opacity-10 rounded">
                                    <td scope="row" data-label="#"><h4>{String(index + 1)}</h4></td>
                                    <td data-label="Map" >{key['name']}</td>
                                    <td data-label="CP"><h4>{key['cp']}</h4></td>
                                    <td data-label="Score"><h4>{key['score']}</h4></td>
                                    <td data-label="Time"><h4>{date.getDate() + '-' + months[date.getMonth()] + '-' + date.getFullYear()}</h4></td>
                                </a></Link>
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

export default UserLeaderboard;
