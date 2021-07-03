import Image from 'next/image';
import useSWR from 'swr';
import { useRouter } from 'next/router';

import Discord from '../../components/Icons/Discord';
import AboutMe from '../../components/AboutMe'
import ScoreSaber from '../../components/Icons/ScoreSaber';
import Github from '../../components/Icons/Github';
import Steam from '../../components/Icons/Steam';
import Twitch from '../../components/Icons/Twitch';
import MyAnimeList from '../../components/Icons/MyAnimeList';
import YouTube from '../../components/Icons/YouTube';
import Twitter from '../../components/Icons/Twitter';
import Reddit from '../../components/Icons/Reddit';
import UserLeaderboard from '../../components/UserLeaderboard';

const User = () => {
    const router = useRouter();
	const fetcher = (url) => fetch(url).then((r) => r.json());
	//const { data, error } = useSWR(`https://challenge-points-dev.herokuapp.com/api/users/${router.query.id}/data`, fetcher);  // First API
    const { data, error } = useSWR(`https://challengepointsapi.herokuapp.com/api/users/${router.query.id}/data`, fetcher);      // Second API

    if (error) return <div>failed to load</div>;
    if (!data) return <div>loading...</div>;

	//rank color gradient: #1FA2FF, #12D8FA, #A6FFCB

    return ( 
	<pre>
        <div>
            <div>
			    <tbody>
                    <td>&nbsp;</td>
                    <td className="test">
			            <tr>
			                <div className="userinfo">
			        	        <Image src={`/users/${router.query.id}.png`} className="picture" width="200" height="200" />
			    		        <div className="margin-left-10">
		        		    	    <h1><b>{data.username}</b></h1>
	    	    		    	    <h3 className="gray">{`"${data.config?.quote}"`}</h3>
			    		            <h1>
				    	        	    &gt;
					            	    <Discord id={router.query.id} />
					            	    <ScoreSaber ssid={data.config?.ssid} />
					               	    <Github gitid={data.config?.gitid} />
					        	        <Steam steamid={data.config?.steamid} />
					        	        <Twitch twitchid={data.config?.twitchid} />
					        	        <MyAnimeList malid={data.config?.malid} />
                                        <YouTube ytid={data.config?.ytid} />
                                        <Twitter twitterid={data.config?.twitterid} />
                                        <Reddit redditid={data.config?.redditid} />
			    		            </h1>
			    	            </div>
			                </div>
			            </tr>
						<br />
						<UserLeaderboard type="user" id={`${router.query.id}`}></UserLeaderboard>
						<br />
			            <tr>
				            <div>
					    	    <AboutMe aboutme={data.config?.aboutme} />
			            	</div>
			            </tr>
						<br />
                        <hr />
						<br />
                        <tr>
                            <a href="" target="_blank">
                                <button title="Report Button" className="btn report">
                                    <img src="/icons/FlagIcon.png" className="btn_icon"/>
                                </button>
                            </a>
                        </tr>
                    </td>
		        </tbody>
		    </div>
        </div>
	</pre>
     );
}
 
export default User;