import Link from "next/link";
import useSWR from "swr";
import styles from "../../styles/Users.module.css";

/*const fetcher = url => fetch(url).then(r => r.json())

export async function getStaticProps() {
	//const data = await fetcher('https://challenge-points-dev.herokuapp.com/api/users/global/1')	// First API
	const data = await fetcher('https://api.challengepoints.net/api/users/global/1')		// Second API
	return { props: { data } }
}*/

const Users = () => {
	const fetcher = (url) => fetch(url).then((r) => r.json());
    const { data, error } = useSWR(`https://api.challengepoints.net/api/users/global/1`, fetcher);

	if (error) return <div>failed to load</div>;
    if (!data) return <div>loading...</div>;
	return (
		<div>
			<h1>Users</h1>
			<table className={styles.userTable}>
				<thead>
					<td>
						<b> # </b>
					</td>
					<td>
						<b> Username </b>
					</td>
					<td>
						<b> CP </b>
					</td>
				</thead>
				<tbody>
					{data.map((user) => {
						return (
							<tr onClick={() => window.location.href=`/users/${user.id}`} key={user.id} className="p-2 px-3 rounded bg-white bg-opacity-0 hover:bg-opacity-10 cursor-pointer">
								<td>{user.global.toString()}</td>
								<td>{user.username}</td>
								<td>{user.cp.toString()}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default Users;
