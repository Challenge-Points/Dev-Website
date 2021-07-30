import Image from "next/image";
import axios from "axios";

const Badges = (props) => {
	const ApplyBadge = (BadgeType, props) => {
		//axios.get(`https://challenge-points-dev.herokuapp.com/api/users/badges/${props.id}/update/${BadgeType}/${props.token}`);	// First API
		axios.get(`https://challengepointsapi.herokuapp.com/api/users/badges/${props.id}/update/${BadgeType}O/${props.token}`);		// Second API
	}
	return (
		<div>
			<h3>Badges</h3>
			<tbody>
				{props.badges.map((item, index) => {
					if (((index % 7) / 100) === 0) return (
					< > 
						<tr>	
						</tr>
						<td>
							<button className="picture" onClick={() => ApplyBadge(item, props)}>
								<Image src={`/badges/${item}.png`} alt={item} height="100" width="100" />
							</button>
						</td>
					</>
					)
					else return (
					<td>
						<button className="picture" onClick={() => ApplyBadge(item, props)}>
							<Image src={`/badges/${item}.png`} alt={item} height="100" width="100" />
						</button>
					</td>
					)
				})}
			</tbody>
		</div>
	);
};

export default Badges;
