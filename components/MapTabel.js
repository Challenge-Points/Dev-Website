import Link from "next/link";
import Image from "next/image";

const MapTable = (props) => {
    var Cover = "/maps/" + props.hash + ".jpg";
    var Hash = props.hash;
    var Name = props.name;
    var Mapper = props.mapper;
    var CP = props.cp + " CP";
    var Diff = props.diff;
    var ID = props.id;
    var Index = props.index;
    var URL = "/maps/map?name=" + Name + "&mapper=" + Mapper + "&hash=" + Hash + "&key=" + ID +"&diff=" + Index;
    return ( 
        <>
            <tr>
				<td>
					<div>
						<Image src={`${Cover}`} className="picture" width="50" height="50" />
					</div>
				</td>
				<td>
					<div class="margin-left-20">
						<Link href={`${URL}`}><a>{`${Name}`}</a></Link>
					</div>
				</td>
				<td>
					<div class="margin-left-20">
                        <Link href={`${URL}`}>{`${Mapper}`}</Link>
					</div>
				</td>
				<td>
					<div class="margin-left-20">
                        <Link href={`${URL}`}>{`${CP}`}</Link>
					</div>
				</td>
                <td>
					<div class="margin-left-20">
                        <Link href={`${URL}`}>{`${Diff}`}</Link>
					</div>
				</td>
			</tr>
        </>
     );
}
 
export default MapTable;