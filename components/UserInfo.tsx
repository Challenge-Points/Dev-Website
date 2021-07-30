import useSWR from 'swr';
import * as clipboard from "clipboard-polyfill/text";
import Image from "next/image";
import axios from "axios";

const UserInfo = (props) => {
    const gitid = (props.config.gitid ? `https://github.com/${props.config.gitid}`  : '')
    const malid = (props.config.malid ? `https://myanimelist.net/${props.config.malid}`  : '')
    const redditid = (props.config.redditid ? `https://reddit.com/${props.config.redditid}`  : '')
    const ssid = (props.config.ssid ? `https://scoresaber.com/${props.config.ssid}`  : '')
    const steamid = (props.config.steamid ? `https://steamcommunity.com/${props.config.steamid}`  : '')
    const twitchid = (props.config.twitchid ? `https://twitch.tv/${props.config.twitchid}`  : '')
    const twitterid = (props.config.twitterid ? `http://twitter.com/${props.config.twitterid}`  : '')
    const ytid = (props.config.ytid ? `https://www.youtube.com/${props.config.ytid}`  : '')

    const fetcher = (url) => fetch(url).then((r) => r.json());
	// const { data, error } = useSWR(`https://challenge-points-dev.herokuapp.com/api/auth/key/get/${props.id}/${props.token}`, fetcher);  // First API
    const { data, error } = useSWR(`https://challengepointsapi.herokuapp.com/api/auth/key/get/${props.id}/${props.token}`, fetcher);      // Second API
    
    if (error) return <div>failed to load</div>;
    if (!data) return <div>loading...</div>;

    const newKey = () => {
		// axios.get(`https://challenge-points-dev.herokuapp.com/api/users/badges/${props.id}/update/${BadgeType}/${props.token}`);	// First API
		axios.get(`https://challengepointsapi.herokuapp.com/api/auth/key/generate/${props.id}/${props.token}`);		                // Second API
	}
    const copyToClipboard = () => {
        clipboard.writeText(data.apikey);
        alert("Key copied to clipboard");
    }

    return (
        <div>
            <table className="inline-block">
                <tbody>
                    <tr>
                        <td>
                            <label htmlFor="fname">Username: &nbsp;</label>
                        </td>
                        <td>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                minLength={3}
                                size={40}
                                value={props.username}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="fname">Github: &nbsp;</label>
                        </td>
                        <td>
                            <input
                                type="text"
                                id="github"
                                name="github"
                                size={40}
                                value={gitid}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="fname">MyAnimeList: &nbsp;</label>
                        </td>
                        <td>
                            <input
                                type="text"
                                id="myanimelist"
                                name="myanimelist"
                                size={40}
                                value={malid}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="fname">Reddit: &nbsp;</label>
                        </td>
                        <td>
                            <input
                                type="text"
                                id="reddit"
                                name="reddit"
                                size={40}
                                value={redditid}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="fname">ScoreSaber: &nbsp;</label>
                        </td>
                        <td>
                            <input
                                type="text"
                                id="scoresaber"
                                name="scoresaber"
                                size={40}
                                value={ssid}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="fname">Steam: &nbsp;</label>
                        </td>
                        <td>
                            <input
                                type="text"
                                id="steam"
                                name="steam"
                                size={40}
                                value={steamid}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="fname">Twitch: &nbsp;</label>
                        </td>
                        <td>
                            <input
                                type="text"
                                id="twitch"
                                name="twitch"
                                size={40}
                                value={twitchid}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="fname">Twitter: &nbsp;</label>
                        </td>
                        <td>
                            <input
                                type="text"
                                id="twitter"
                                name="twitter"
                                size={40}
                                value={twitterid}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="fname">YouTube: &nbsp;</label>
                        </td>
                        <td>
                            <input
                                type="text"
                                id="youtube"
                                name="youtube"
                                size={40}
                                value={ytid}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
            <table className="inline-block margin-left-20">
                <tbody>
                    <tr>
                        <td>
                            <label htmlFor="fname">API Key: &nbsp;</label>
                        </td>
                        <td>
                            <input
                                className="apikey"
                                type="text"
                                id="apikey"
                                name="apikey"
                                size={37}
                                value={data?.apikey}
                                readOnly
                            />
                        </td>
                        <td>
                            <button onClick={() => copyToClipboard()} title="Copy to Clipboard">
                                <Image src={`/icons/copy-content.png`} width="25" height="25"/>
                            </button>
                        </td>
                        <td>
                            <button onClick={() => newKey()} title="Generate new key">
                                <Image src={`/icons/star.png`} width="25" height="25"/>
                            </button>
                        </td>
                    </tr>
                </tbody>    
            </table>
        </div>
    );
};

export default UserInfo;
