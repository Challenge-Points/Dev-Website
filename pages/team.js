import Image from "next/image";

import TeamMember from "../components/teammember";

const Team = () => {
	var team = {
		devs: [
			{ pfpURL: "Aso.gif", userID: "" },
			{ pfpURL: "ThiJNmEnS.png", userID: "" },
			{ pfpURL: "ActuallyThatsWrong.png", userID: "" },
			{ pfpURL: "Lauriethefish.png", userID: "" },
			{ pfpURL: "Sirspam.png", userID: "" },
			{ pfpURL: "アニメのくわ.png", userID: "" },
		],
		rankingTeam: [
			{ pfpURL: "Owotsu.png", userID: "" },
			{ pfpURL: "Abstr4kt.png", userID: "" },
			{ pfpURL: "Clock.png", userID: "" },
			{ pfpURL: "Flaime.png", userID: "" },
			{ pfpURL: "Galaxy99.png", userID: "" },
			{ pfpURL: "Hairclip.png", userID: "" },
			{ pfpURL: "HELO.png", userID: "" },
			{ pfpURL: "MasterSlayer379.gif", userID: "" },
			{ pfpURL: "Phytotitan_10.png", userID: "" },
			{ pfpURL: "Plasim.png", userID: "" },
			{ pfpURL: "Salad.png", userID: "" },
		],
		honorableMentions: [{ pfpURL: "LicensedCrime.png", userID: "" }],
	};

	return (
		<div>
			<h1>Team</h1>
			<h2>Developers</h2>
			<tbody>
				<tr>
					{team.devs.map((dev) => (
						<TeamMember key={dev.pfpURL} pfpURL={dev.pfpURL} userID={dev.userID} />
					))}
				</tr>
			</tbody>
			<h2>Ranking Team</h2>
			<tbody>
				<tr>
					{team.rankingTeam.map((dev) => (
						<TeamMember key={dev.pfpURL} pfpURL={dev.pfpURL} userID={dev.userID} />
					))}
				</tr>
			</tbody>
			<h2>Honorable Mentions</h2>
			<tbody>
				<tr>
					{team.honorableMentions.map((dev) => (
						<TeamMember key={dev.pfpURL} pfpURL={dev.pfpURL} userID={dev.userID} />
					))}
				</tr>
			</tbody>
		</div>
	);
};

export default Team;
