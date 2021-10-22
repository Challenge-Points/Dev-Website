import Link from "next/link";
import Image from "next/image";

const MapTable = (props) => {
    var Cover = "/maps/" + props.hash + ".jpg";
    var diff = ((props.diff == 'expert+') ? 'expertplus' : props.diff)
    console.log(diff)
    var URL = `/maps/map?hash=${props.hash}&diff=${diff}`
    return (
        <>
            <tr onClick={() => window.location.href=`${URL}`} className="p-2 px-3 bg-white bg-opacity-0 hover:bg-opacity-10 rounded cursor-pointer">
                <td />
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
                        {props.name}
                    </div>
                </td>
                <td>
                    <div className="margin-left-20">
                        {props.mapper}
                    </div>
                </td>
                <td>
                    <div className="margin-left-20">
                        {`${props.cp} CP`}
                    </div>
                </td>
                <td>
                    <div className="margin-left-20">
                        {diff}
                    </div>
                </td>
                <td />
            </tr>
        </>
    );
};

export default MapTable;
