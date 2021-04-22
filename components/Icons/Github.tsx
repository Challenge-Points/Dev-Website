import Link from "next/link";
import Image from "next/image";

const Github = (props) => {
    if (props.gitid == null) {
        return <></>;
    } else {
        return (
            <a href={`https://github.com/${props.gitid}`}>
                <Image
                    src="/icons/GithubLogo.png"
                    className="icon"
                    width="20"
                    height="20"
                />
            </a>
        );
    }
};

export default Github;
