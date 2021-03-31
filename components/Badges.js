import Image from "next/image"

const Badges = () => {
    return ( 
        <div>
            <h3>Badges</h3>
            <tbody>
                <td>
                    <button class="picture" onClick={ApplyBadge("Alpha")}><Image src="/../public/badges/AlphaBadge.png" alt="Alpha" class="picture" width="100" height="100"/></button>
                </td>
                <td>
                    <button class="picture" onClick={ApplyBadge("Beta")}><Image src="/../public/badges/BetaBadge.png" alt="Beta" class="picture" width="100" height="100"/></button>
                </td>
                <td>
                    <button class="picture" onClick={ApplyBadge("Dev")}><Image src="/../public/badges/DevBadge.png" alt="Dev" class="picture" width="100" height="100"/></button>
                </td>
                <td>
                    <button class="picture" onClick={ApplyBadge("RT")}><Image src="/../public/badges/RTBadge.png" alt="RT" class="picture" width="100" height="100"/></button>
                </td>
                <td>
                    <button class="picture" onClick={ApplyBadge("Contributer")}><Image src="/../public/badges/ContributerBadge.png" alt="Contributer" class="picture" width="100" height="100"/></button>
                </td>
                <td>
                <button class="picture" onClick={ApplyBadge("Supporter")}><Image src="/../public/badges/SupporterBadge.png" alt="Supporter" class="picture" width="100" height="100"/></button>
                </td>
            </tbody>
        </div>
     );
}
 
export default Badges;

function ApplyBadge(BadgeType) {
    console.log(BadgeType)
}