import Link from "next/link";

import styles from "../../styles/Users.module.css";

export const getServerSideProps = async () => {
	var res = await fetch("http://localhost/api/users/global/1");
	var data = await res.json();

	return {
		props: { data },
	};
};

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
						<b>CP</b>
					</td>
				</thead>
				<tbody>
					{props.data.map((user) => {
						return (
							<tr key={user.id}>
								<td> {user.global.toString()} </td>
								<td> {user.username} </td>
								<td> {user.cp.toString()} </td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default Users;
