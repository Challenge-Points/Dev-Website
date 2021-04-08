import Link from 'next/link';
import Image from 'next/image';

const Discord = (props) => {
    if(props.id == null) {
        return (<></>);
    }
    else {
        return ( 
            <Link href={`https://discordapp.com/users/${props.id}`}>
	    		<a>
	    			<Image src="/icons/DiscordLogo.png" class="icon" width="20" height="20" />
	    		</a>
	    	</Link>
        );
    }
}
 
export default Discord;