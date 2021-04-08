import Link from 'next/link';
import Image from 'next/image';

const Twitch = (props) => {
    if(props.twitchid == null) {
        return (<></>);
    }
    else {
        return ( 
            <a href={`https://twitch.tv/${props.twitchid}`}>
	    		<Image src="/icons/TwitchLogo.png" class="icon" width="20" height="20" />
	    	</a>
        );
    }
}
 
export default Twitch;