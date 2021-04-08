import Link from 'next/link';
import Image from 'next/image';

const MyAnimeList = (props) => {
    if(props.malid == null) {
        return (<></>);
    }
    else {
        return ( 
            <a href={`https://myanimelist.net/profile/${props.malid}`}>
	    		<Image src="/icons/MyAnimeListLogo.png" class="icon" width="20" height="20" />
	    	</a>
        );
    }
}
 
export default MyAnimeList;