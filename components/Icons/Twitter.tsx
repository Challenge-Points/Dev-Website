import Link from 'next/link';
import Image from 'next/image';

const Twitter = (props) => {
    if(props.twitterid == null) {
        return (<></>);
    }
    else {
        return ( 
            <a href={`https://twitter.com/${props.twitterid}`}>
				<Image src="/icons/TwitterLogo.png" className="icon" width="20" height="20" />
			</a>
        );
    }
}
 
export default Twitter;