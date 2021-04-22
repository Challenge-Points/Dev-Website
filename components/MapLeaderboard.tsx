import React from "react";
import styles from "../styles/Users.module.css";

export const getServerSideProps = async () => {
    var res = await fetch(
        `https://challenge-points-dev.herokuapp.com/api/users/global/1`
    );
    var data = await res.json();

    return {
        props: { data },
    };
};
// TODO: Map Leaderboard component
const MapLeaderboard: React.FunctionComponent<{}> = (props) => {
    return (
        <div>
            <hr />
            <table className={styles.userTable}>
                <thead>
                    <td>
                        <b> # </b>
                    </td>
                    <td>
                        <b> Username </b>
                    </td>
                    <td>
                        <b>CP</b>
                    </td>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <h4>1</h4>
                        </td>
                        <td>
                            <h4>Thijnmens</h4>
                        </td>
                        <td>420.69</td>
                    </tr>
                </tbody>
            </table>
            <hr />
        </div>
    );
};

export default MapLeaderboard;
