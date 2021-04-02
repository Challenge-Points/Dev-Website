import Image from "next/image";

var Badge = ({ src }) => {
	return <Image src={`/badges/${src}`} alt={src.replace(".png", "")} height="100" width="100" />;
};

export default Badge;
