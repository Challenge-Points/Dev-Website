import Link from "next/link";

const Users = () => {
	return (
		<div>
			<h1>Users</h1>
			<tbody>
				<tr>
					<Link href="/users/490534335884165121"><a>ThiJNmEnS</a></Link>
				</tr>
				<tr>
					<Link href="/users/580425653325791272"><a>Aso</a></Link>
				</tr>
			</tbody>		
		</div>
	);
};

export default Users;
