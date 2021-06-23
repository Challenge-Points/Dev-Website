import styles from "../styles/Users.module.css";

const fetcher = url => fetch(url).then(r => r.json())

export async function getStaticProps() {
	const data = await fetcher('https://challenge-points-dev.herokuapp.com/api/stats/all')
	return { props: { data } }
}

const ServerStats = (props) => {
	console.log(props.data)
    return ( 
        <div>    
            <div>
                <p>Server Stats</p>
                <table className={styles.userTable}>
                    <thead>
                        <td>
                            <b>API Calls</b>
                        </td>
                    </thead>
                    <tbody>
                        {/*props.data.then((stats) => {
							return (
								<tr>
									<td> {stats.apicalls.toString()} </td>
								</tr>	
							);
						})*/}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

/*export async function getServerSideProps() {
	var res = await fetch(`https://challenge-points-dev.herokuapp.com/api/stats/all`);
	var data = await res.json();

	return {
		props: { data }
	};
};*/


export default ServerStats;