import Image from "next/Image";

const TeamMember = ({ userID, pfpURL }) => {
	return (
		<>
			<td>
				<Image href={`/users/${userID}`} src={`/team/${pfpURL}`} alt={pfpURL} class="picture" width="200" height="200" />
			</td>
			<td>
				<div class="margin-left-10"></div>
			</td>
		</>
	);
};

export default TeamMember;
