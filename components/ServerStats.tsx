import useSWR from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

const ServerStats = () => {
    //const { data, error } = useSWR(`https://challenge-points-dev.herokuapp.com/api/stats/all`, fetcher);  // First API
    const { data, error } = useSWR(`https://challengepointsapi.herokuapp.com/api/stats/all`, fetcher);      // Second API

    if (error) return <div>failed to load</div>;
    if (!data) return <div>loading...</div>;
    return (
    <pre>
        <div>    
            <div>
                <p>Server Stats</p>
                <table>
                    <thead>
                        <td>
                            <b>API Calls</b>
                        </td>
                    </thead>
                    <tbody>
						<tr>
							<td> {data.apicalls} </td>
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