import Link from "next/link";
import Image from "next/image";

const MapTable = (props) => {
    var Hash = props.hash;
    var Name = props.name;
    var Mapper = props.mapper;
    var CP = props.cp + " CP";
    var Diff = props.diff;
    var ID = props.id;
    var Index = props.index;
	var Cover = "/maps/" + Hash + ".jpg";
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
					<div className="margin-left-20">
						<Link href={`${URL}`}><a>{`${Name}`}</a></Link>
					</div>
				</td>
				<td>
					<div className="margin-left-20">
                        <Link href={`${URL}`}>{`${Mapper}`}</Link>
					</div>
				</td>
				<td>
					<div className="margin-left-20">
                        <Link href={`${URL}`}>{`${CP}`}</Link>
					</div>
				</td>
                <td>
					<div className="margin-left-20">
                        <Link href={`${URL}`}>{`${Diff}`}</Link>
					</div>
				</td>
			</tr>
        </>
     );
}
 
export default MapTable;