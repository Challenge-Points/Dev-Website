import Image from 'next/image';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import LineGraph from 'smooth-line-graph';

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
    const { data, error } = useSWR(`https://api.challengepoints.net/api/users/${router.query.id}/data`, fetcher);

    if (error) return <div>failed to load</div>;
    if (!data) return <div>loading...</div>;

	const globalhistory = data.globalhistory;
	const max = Math.max(...globalhistory);
	const min = Math.min(...globalhistory);
	const history = [[0, globalhistory[0]], [1, globalhistory[1]], [2, globalhistory[2]], [3, globalhistory[3]], [4, globalhistory[4]], [5, globalhistory[5]], [6, globalhistory[6]], [7, globalhistory[7]], [8, globalhistory[8]], [9, globalhistory[9]], [10, globalhistory[10]], [11, globalhistory[11]], [12, globalhistory[12]], [13, globalhistory[13]], [14, globalhistory[14]], [15, globalhistory[15]], [16, globalhistory[16]], [17, globalhistory[17]], [18, globalhistory[18]], [19, globalhistory[19]], [20, globalhistory[20]], [21, globalhistory[21]], [22, globalhistory[22]], [23, globalhistory[23]], [24, globalhistory[24]], [25, globalhistory[25]], [26, globalhistory[26]], [27, globalhistory[27]], [28, globalhistory[28]], [29, globalhistory[29]], [30, globalhistory[30]]]
	const graph = {
    	name: 'rankhistory',
    	width: 600,
    	height: 100,
		minX: 0,
		maxX: 30,
		minY: min - 10,
		maxY: max + 10,
    	lines: [
    	    {
    	        key: 'history',
    	        data: history,
				color: '#22B14C',
				smooth: true,
				strokeWidth: 5
    	    }
    	]
	};
	
    return ( 
	<pre>
        <div>
            <div>
			    <tbody>
                    <td>&nbsp;</td>
                    <td className="test">
						<tr>
							<br />
						</tr>
			            <tr>
			                <div className="userinfo">
								<div className="avatardiv">
			        	        	<Image src={`/users/${router.query.id}.png`} className="picture" width="200" height="200" />
								</div>
								<div className="badgediv">
									<Image src={`/badges/${data.config?.badge}.png`} width="280" height="280" />
								</div>
			    		        <div className="margin-left-10">
		        		    	    <h1><b className="username">{data.username}</b> <b className="globalrank">#{data.global}</b></h1>
	    	    		    	    <h3 className="gray">{`"${data.config?.quote}"`}</h3>
									<br />
									<div className="iconbar">
			    		            	<h1>
											<Image src="/icons/GreaterThen.png" className="icon" width="20" height="20" />
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
										<br />
										<Image src="/icons/GreaterThen.png" className="" width="20" height="20" />
										{data.badges.map((item, index) => {
											return (
												<Image key={index} src={`/badges/${item}.png`} alt={item} height="25" width="25" />
											)
										})}
										<LineGraph {...graph} />
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