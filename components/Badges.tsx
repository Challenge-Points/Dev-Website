import Image from "next/image";

const Badges = (props) => {
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
							<button className="picture" onClick={() => ApplyBadge({item})}>
								<Image src={`/badges/${item}.png`} alt={item} height="100" width="100" />
							</button>
						</td>
					</>
					)
					else return (
					<td>
						<button className="picture" onClick={() => ApplyBadge({item})}>
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

function ApplyBadge(BadgeType) {
	//TODO: PUT request to the API for updating the current displayed badge
	console.log(BadgeType);
}
