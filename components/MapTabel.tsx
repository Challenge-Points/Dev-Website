import Link from "next/link";
import Image from "next/image";

const MapTable = (props) => {
    var Cover = "/maps/" + props.hash + ".jpg";
    var URL = `/maps/map?hash=${props.hash}`
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
                            <a>{`${props.name}`}</a>
                        </Link>
                    </div>
                </td>
                <td>
                    <div className="margin-left-20">
                        <Link href={`${URL}`}>{`${props.mapper}`}</Link>
                    </div>
                </td>
                <td>
                    <div className="margin-left-20">
                        <Link href={`${URL}`}>{`${props.cp} CP`}</Link>
                    </div>
                </td>
                <td>
                    <div className="margin-left-20">
                        <Link href={`${URL}`}>{`${props.diff}`}</Link>
                    </div>
                </td>
            </tr>
        </>
    );
};

export default MapTable;
