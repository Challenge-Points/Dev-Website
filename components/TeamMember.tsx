import Image from "next/image";
import Link from "next/link";

const TeamMember = ({ userID, pfpURL }) => {
    return (
        <>
            <td>
                <Link href={`/users/user?id=${userID}`}>
                    <a>
                        <Image
                            src={`/users/${pfpURL}`}
                            alt={pfpURL}
                            className="picture"
                            width="200"
                            height="200"
                            layout="intrinsic"
                        />
                    </a>
                </Link>
            </td>
            <td>
                <div className="margin-left-10"></div>
            </td>
        </>
    );
};

export default TeamMember;
