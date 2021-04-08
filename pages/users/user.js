import Image from 'next/image';
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
import { useRouter } from 'next/router';




const User = () => {
    const router = useRouter();
    return ( 
        <div>
            <div>
			    <tbody>
                    <td>&nbsp;</td>
                    <td class="test">
			            <tr>
			                <div class="userinfo">
			        	        <Image src={`/users/${router.query.id}.png`} class="picture" width="200" height="200" />
			    		        <div class="margin-left-10">
		        		    	    <h1>{router.query.name}</h1>
	    	    		    	    <h3 class="gray">{`"${router.query.quote}"`}</h3>
			    		            <h1>
				    	        	    &gt;
					            	    <Discord id={router.query.id} />    
					            	    <ScoreSaber ssid={router.query.ssid} />
					               	    <Github gitid={router.query.gitid} />
					        	        <Steam steamid={router.query.steamid} />
					        	        <Twitch twitchid={router.query.twitchid} />
					        	        <MyAnimeList malid={router.query.malid} />
                                        <YouTube ytid={router.query.ytid} />
                                        <Twitter twitterid={router.query.twitterid} />
                                        <Reddit redditid={router.query.redditid} />
			    		            </h1>
			    	            </div>
			                </div>
			            </tr>
                        <hr />
			            <tr>
				            <div>
					    	    <AboutMe aboutme={router.query.aboutme} />
			            	</div>
			            </tr>
                        <hr />
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
     );
}
 
export default User;