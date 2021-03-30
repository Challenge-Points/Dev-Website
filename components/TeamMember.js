import Image from "next/Image";

const TeamMember = ({ userID, pfpURL }) => {
	return (
		<>
			<td>
				<Image href={`/users/${userID}`} src={`/team/${pfpURL}`} alt={pfpURL} className="picture" width="200" height="200" />
			</td>
			<td>
				<div className="margin-left-10"></div>
			</td>
		</>
	);
};

export default TeamMember;
