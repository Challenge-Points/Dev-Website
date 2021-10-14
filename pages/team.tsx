import Image from "next/image";
import React from 'react';
import TeamMember from "../components/TeamMember";
import useSWR from 'swr';

const Team: React.FunctionComponent<{}> = () => {
	/*const fetcher = (url) => fetch(url).then((r) => r.json());
    const { data, error } = useSWR(`https://api.challengepoints.net/api/users/${router.query.id}/data`, fetcher);

	if (error) return <div>failed to load</div>;
    if (!data) return <div>loading...</div>;*/

	var team = {
		devs: [
			{ pfpURL: "490534335884165121.png", userID: "490534335884165121" },
			{ pfpURL: "580425653325791272.gif", userID: "580425653325791272" },
			{ pfpURL: "415210421994258433.png", userID: "415210421994258433" },
			{ pfpURL: "232574143818760192.png", userID: "232574143818760192" },
			{ pfpURL: "691620709109071963.png", userID: "691620709109071963" },
		],
		rankingTeam: [
			{ pfpURL: "733473765920604261.png", userID: "733473765920604261" },
			{ pfpURL: "329077613169606659.png", userID: "329077613169606659" },
			{ pfpURL: "200788472938758144.png", userID: "200788472938758144" },
			{ pfpURL: "507303317249065002.png", userID: "507303317249065002" },
			{ pfpURL: "353561968919183361.png", userID: "353561968919183361" },
			{ pfpURL: "342121522481201163.png", userID: "342121522481201163" },
			{ pfpURL: "673280187537948723.png", userID: "" },
			{ pfpURL: "318147875177758720.gif", userID: "318147875177758720" },
			{ pfpURL: "376313885130752002.png", userID: "376313885130752002" },
			{ pfpURL: "285488877626458123.png", userID: "285488877626458123" },
			{ pfpURL: "535467184856629260.png", userID: "535467184856629260" },
		],
		honorableMentions: [
			{ pfpURL: "345789473637924866.png", userID: "345789473637924866" },
		],
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
