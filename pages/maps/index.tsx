import MapTable from "../../components/MapTabel";
import styles from "../../styles/Users.module.css";
import useSWR from "swr";
import React, { useState } from "react";

const Maps = () => {
    const [page, pageSwitch] = useState(1);
    const fetcher = (url) => fetch(url).then((r) => r.json());
    const { data, error } = useSWR(`https://api.challengepoints.net/api/maps/all/${page}`, fetcher);

    if (error) return <div>failed to load</div>;
    if (!data) return <div>loading...</div>;
    return (
        <div>
            <h1>Maps</h1>
            <table className={styles.userTable}>
                <thead>
                    <td>
                        <div className="margin-left-20">
                            <b> </b>
                        </div>
                    </td>
                    <td>
                        <div className="margin-left-20">
                            <b> Name </b>
                        </div>
                    </td>
                    <td>
                        <div className="margin-left-20">
                            <b> Mapper </b>
                        </div>
                    </td>
                    <td>
                        <div className="margin-left-20">
                            <b> CP </b>
                        </div>
                    </td>
                    <td>
                        <div className="margin-left-20">
                            <b> Diff </b>
                        </div>
                    </td>
                </thead>
                <tbody>
                    {data.map((key, index) => {
                        return(
                            key.difficulties.map((key2) => {
                                console.log(key2)
                                return (
                                    <MapTable
                                        key={index}
                                        hash={key.hash}
                                        name={key.m_n}
                                        diff={key2.d}
                                        mapper={key.mr_n}
                                        cp={key2.m_c}
                                        id={key.key}
                                        index={key?.i}
                                    />
                                )
                            })
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
        </div>
    );
};

export default Maps;
