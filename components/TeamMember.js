import Image from "next/image";

const TeamMember = ({ userID, pfpURL }) => {
	return (
		<>
			<td>
				<Image href={`/users/${userID}`} src={`/team/${pfpURL}`} alt={pfpURL} className="picture" width="200" height="200" layout="intrinsic"  />
			</td>
			<td>
				<div className="margin-left-10"></div>
			</td>
		</>
	);
};

export default TeamMember;
