import Image from "next/Image";

import TeamMember from "../components/TeamMember";

const Team = () => {
	var devs = [
		{ pfpURL: "Aso.gif", userID: "580425653325791272" },
		{ pfpURL: "ThiJNmEnS.png", userID: "490534335884165121" },
		{ pfpURL: "ActuallyThatsWrong.png", userID: "580425653325791272" },
		{ pfpURL: "Lauriethefish.png", userID: "580425653325791272" },
		{ pfpURL: "Sirspam.png", userID: "490534335884165121" },
	];

	return (
		<div>
			<h1>Team</h1>
			<h2>Developers</h2>
			<tbody>
				{devs.map((dev) => {
					return <TeamMember pfpURL={dev.pfpURL} userID={dev.userID} />;
				})}
			</tbody>
			<h2>Ranking Team</h2>
			<tbody>
				<tr></tr>
			</tbody>
			<h2>Honorable Mentions</h2>
			<tbody>
				<tr></tr>
			</tbody>
		</div>
	);
};

export default Team;
