import Link from "next/link";
import Image from "next/image";

const MapTable = (props) => {
    var Cover = "/maps/" + props.hash + ".jpg";
    var diff;
    if (props.diff == 'expert+') {diff = 'expertplus'};
    var URL = `/maps/map?hash=${props.hash}&diff=${diff}`
    return (
        <>
            <tr>
                <td>
                    <div>
                        <Image
                            src={`${Cover}`}
                            className="picture"
                            width="50"
                            height="50"
                        />
                    </div>
                </td>
                <td>
                    <div className="margin-left-20">
                        <Link href={`${URL}`}>
                            <a className="p-2 px-3 bg-white bg-opacity-0 hover:bg-opacity-10 rounded">{props.name}</a>
                        </Link>
                    </div>
                </td>
                <td>
                    <div className="margin-left-20">
                        <Link href={`${URL}`}><a className="p-2 px-3 bg-white bg-opacity-0 hover:bg-opacity-10 rounded">{props.mapper}</a></Link>
                    </div>
                </td>
                <td>
                    <div className="margin-left-20">
                        <Link href={`${URL}`}><a className="p-2 px-3 bg-white bg-opacity-0 hover:bg-opacity-10 rounded">{`${props.cp} CP`}</a></Link>
                    </div>
                </td>
                <td>
                    <div className="margin-left-20">
                        <Link href={`${URL}`}><a className="p-2 px-3 bg-white bg-opacity-0 hover:bg-opacity-10 rounded">{diff}</a></Link>
                    </div>
                </td>
            </tr>
        </>
    );
};

export default MapTable;
