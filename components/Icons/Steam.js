import Link from 'next/link';
import Image from 'next/image';

const Steam = (props) => {
    if(props.steamid == null) {
        return (<></>);
    }
    else {
        return ( 
            <a href={`https://steamcommunity.com/id/${props.steamid}`}>
	    		<Image src="/icons/SteamLogo.png" class="icon" width="20" height="20" />
	    	</a>
        );
    }
}
 
export default Steam;