import Link from "next/link";
import Image from "next/image";

const Reddit = (props) => {
    if (props.redditid == null) {
        return <></>;
    } else {
        return (
            <a href={`https://reddit.com/user/${props.redditid}`}>
                <Image
                    src="/icons/RedditLogo.png"
                    className="icon"
                    width="20"
                    height="20"
                />
            </a>
        );
    }
};

export default Reddit;
