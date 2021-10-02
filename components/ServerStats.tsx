import styles from "../styles/Users.module.css";
import useSWR from "swr";

const ServerStats = () => {
    const fetcher = (url) => fetch(url).then((r) => r.json());
    const { data, error } = useSWR(`http://api.challengepoints.net/api/stats/all`, fetcher);

    if (error) return <div>failed to load</div>;
    if (!data) return <div>loading...</div>;
    return (
    <pre>
        <div>    
            <div>
                <p>Server Stats</p>
                <table className={styles.userTable}>
                    <thead>
                        <tr>
                            <th scope="col">API Calls</th>
                            <th scope="col">In Queue</th>
                            <th scope="col">Ranked Maps</th>
                            <th scope="col">Scores Set</th>
                            <th scope="col">Users registered</th>
                        </tr>
                    </thead>
                    <tbody>
						<tr>
							<td scope="row" data-label="API Calls"> {data.apicalls} </td>
                            <td data-label="In Queue"> {data.in_queue} </td>
                            <td data-label="Ranked Maps"> {data.maps_ranked} </td>
                            <td data-label="Scores Set"> {data.scores_set} </td>
                            <td data-label="Users registered"> {data.users_registered} </td>
						</tr>	
                    </tbody>
                </table>
            </div>
        </div>
    </pre>
    );
}

/*export async function getServerSideProps() {
	var res = await fetch(`https://challenge-points-dev.herokuapp.com/api/stats/all`);
	var data = await res.json();

	return {
		props: { data }
	};
};*/


export default ServerStats;