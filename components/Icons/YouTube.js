import Link from 'next/link';
import Image from 'next/image';

const YouTube = (props) => {
    if(props.ytid == null) {
        return (<></>);
    }
    else {
        return (
        <a href={`https://www.youtube.com/channel/${props.ytid}`}>
                <Image src="/icons/YouTubeLogo.png" class="icon" width="20" height="20" />
            </a>
        );
    }
    
}
 
export default YouTube;