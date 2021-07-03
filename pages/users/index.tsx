import Link from "next/link";

import styles from "../../styles/Users.module.css";

const fetcher = url => fetch(url).then(r => r.json())

export async function getStaticProps() {
	//const data = await fetcher('https://challenge-points-dev.herokuapp.com/api/users/global/1')	// First API
	const data = await fetcher('https://challengepointsapi.herokuapp.com/api/users/global/1')		// Second API
	return { props: { data } }
}

const Users = (props) => {
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
					{props.data.map((user) => {
						return (
							<tr key={user.id}>
								<td><Link href={`/users/user?id=${user.id}`}><a className="p-2 px-3 bg-white bg-opacity-0 hover:bg-opacity-10 rounded"> {user.global.toString()} </a></Link></td>
								<td><Link href={`/users/user?id=${user.id}`}><a className="p-2 px-3 bg-white bg-opacity-0 hover:bg-opacity-10 rounded"> {user.username} </a></Link></td>
								<td><Link href={`/users/user?id=${user.id}`}><a className="p-2 px-3 bg-white bg-opacity-0 hover:bg-opacity-10 rounded"> {user.cp.toString()} </a></Link></td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default Users;
