import Link from "next/link";

import styles from "../../styles/Users.module.css";

export const getServerSideProps = async () => {
	var res = await fetch(`https://challenge-points-dev.herokuapp.com/api/users/global/1`);
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
								<td><Link href={`/users/user?id=${user.id}&name=${user.username}&quote=${user.config.quote}&ssid=${user.config.ssid}&gitid=${user.config.gitid}&steamid=${user.config.steamid}&twitchid=${user.config.twitchid}&malid=${user.config.malid}&aboutme=${user.config.aboutme}`}><a> {user.global.toString()} </a></Link></td>
								<td><Link href={`/users/user?id=${user.id}&name=${user.username}&quote=${user.config.quote}&ssid=${user.config.ssid}&gitid=${user.config.gitid}&steamid=${user.config.steamid}&twitchid=${user.config.twitchid}&malid=${user.config.malid}&aboutme=${user.config.aboutme}`}><a> {user.username} </a></Link></td>
								<td><Link href={`/users/user?id=${user.id}&name=${user.username}&quote=${user.config.quote}&ssid=${user.config.ssid}&gitid=${user.config.gitid}&steamid=${user.config.steamid}&twitchid=${user.config.twitchid}&malid=${user.config.malid}&aboutme=${user.config.aboutme}`}><a> {user.cp.toString()} </a></Link></td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default Users;
