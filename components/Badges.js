import Badge from "./badge";

const Badges = () => {
	return (
		<div>
			<h3>Badges</h3>
			<tbody>
				<td>
					<button class="picture" onClick={ApplyBadge("Alpha")}>
						<Badge src="AlphaBadge.png"></Badge>
					</button>
				</td>
				<td>
					<button class="picture" onClick={ApplyBadge("Beta")}>
						<Badge src="BetaBadge.png" />
					</button>
				</td>
				<td>
					<button class="picture" onClick={ApplyBadge("Dev")}>
						<Badge src="DevBadge.png" />
					</button>
				</td>
				<td>
					<button class="picture" onClick={ApplyBadge("RT")}>
						<Badge src="RTBadge.png" />
					</button>
				</td>
				<td>
					<button class="picture" onClick={ApplyBadge("Contributer")}>
						<Badge src="ContributerBadge.png" />
					</button>
				</td>
				<td>
					<button class="picture" onClick={ApplyBadge("Supporter")}>
						<Badge src="SupporterBadge.png" />
					</button>
				</td>
			</tbody>
		</div>
	);
};

export default Badges;

function ApplyBadge(BadgeType) {
	console.log(BadgeType);
}
