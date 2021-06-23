import Link from "next/link";

import styles from "../../styles/Users.module.css";

const fetcher = url => fetch(url).then(r => r.json())

export async function getStaticProps() {
	const data = await fetcher('https://challenge-points-dev.herokuapp.com/api/users/global/1')
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
								<td><Link href={`/users/user?id=${user.id}`}><a> {user.global.toString()} </a></Link></td>
								<td><Link href={`/users/user?id=${user.id}`}><a> {user.username} </a></Link></td>
								<td><Link href={`/users/user?id=${user.id}`}><a> {user.cp.toString()} </a></Link></td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default Users;
