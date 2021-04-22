import Link from 'next/link';
import Image from 'next/image';

const ScoreSaber = (props) => {
    if(props.ssid == null) {
        return (<></>);
    }
    else {
        return ( 
            <a href={`https://scoresaber.com/u/${props.ssid}`}>
	    		<Image src="/icons/ScoreSaberLogo.png" className="icon" width="20" height="20" />
	    	</a>
        );
    }
}
 
export default ScoreSaber