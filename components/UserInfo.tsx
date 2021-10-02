import useSWR from 'swr';
import * as clipboard from "clipboard-polyfill/text";
import Image from "next/image";
import axios from "axios";
import React from "react";

const UserInfo = (props) => {
    const username = React.useRef(null);
    const git = React.useRef(null);
    const gitid = (props.config.gitid ? `https://github.com/${props.config.gitid}`  : '');
    const mal = React.useRef(null);
    const malid = (props.config.malid ? `https://myanimelist.net/${props.config.malid}`  : '');
    const reddit = React.useRef(null);
    const redditid = (props.config.redditid ? `https://reddit.com/${props.config.redditid}`  : '');
    const ss = React.useRef(null);
    const ssid = (props.config.ssid ? `https://scoresaber.com/${props.config.ssid}`  : '');
    const steam = React.useRef(null);
    const steamid = (props.config.steamid ? `https://steamcommunity.com/${props.config.steamid}`  : '');
    const twitch = React.useRef(null);
    const twitchid = (props.config.twitchid ? `https://twitch.tv/${props.config.twitchid}`  : '');
    const twitter = React.useRef(null);
    const twitterid = (props.config.twitterid ? `http://twitter.com/${props.config.twitterid}`  : '');
    const yt = React.useRef(null);
    const ytid = (props.config.ytid ? `https://www.youtube.com/${props.config.ytid}`  : '');

    const fetcher = (url) => fetch(url).then((r) => r.json());
	const { data, error } = useSWR(`http://api.challengepoints.net/api/auth/key/get/${props.id}/${props.token}`, fetcher);
    
    if (error) return <div>failed to load</div>;
    if (!data) return <div>loading...</div>;

    const newKey = () => {
		axios.get(`http://api.challengepoints.net/api/auth/key/generate/${props.id}/${props.token}`);
	};
    const copyToClipboard = () => {
        clipboard.writeText(data.apikey);
        alert("Key copied to clipboard");
    };

    const handleUpload = () => {
        const data = {
            gitid: git.current.value,
            malid: mal.current.value,
            redditid: reddit.current.value,
            ssid: ss.current.value,
            steamid: steam.current.value,
            twitchid: twitch.current.value,
            twitterid: twitter.current.value,
            ytid: yt.current.value
        }
        axios.post(`http://api.challengepoints.net/api/users/links/${props.id}/update/${props.token}`, data);
    };

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
                                ref={username}
                                type="text"
                                id="username"
                                name="username"
                                minLength={3}
                                size={40}
                                defaultValue={props.username}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="fname">Github: &nbsp;</label>
                        </td>
                        <td>
                            <input
                                ref={git}
                                type="text"
                                id="github"
                                name="github"
                                size={40}
                                defaultValue={gitid}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="fname">MyAnimeList: &nbsp;</label>
                        </td>
                        <td>
                            <input
                                ref={mal}
                                type="text"
                                id="myanimelist"
                                name="myanimelist"
                                size={40}
                                defaultValue={malid}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="fname">Reddit: &nbsp;</label>
                        </td>
                        <td>
                            <input
                                ref={reddit}
                                type="text"
                                id="reddit"
                                name="reddit"
                                size={40}
                                defaultValue={redditid}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="fname">ScoreSaber: &nbsp;</label>
                        </td>
                        <td>
                            <input
                                ref={ss}
                                type="text"
                                id="scoresaber"
                                name="scoresaber"
                                size={40}
                                defaultValue={ssid}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="fname">Steam: &nbsp;</label>
                        </td>
                        <td>
                            <input
                                ref={steam}
                                type="text"
                                id="steam"
                                name="steam"
                                size={40}
                                defaultValue={steamid}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="fname">Twitch: &nbsp;</label>
                        </td>
                        <td>
                            <input
                                ref={twitch}
                                type="text"
                                id="twitch"
                                name="twitch"
                                size={40}
                                defaultValue={twitchid}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="fname">Twitter: &nbsp;</label>
                        </td>
                        <td>
                            <input
                                ref={twitter}
                                type="text"
                                id="twitter"
                                name="twitter"
                                size={40}
                                defaultValue={twitterid}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="fname">YouTube: &nbsp;</label>
                        </td>
                        <td>
                            <input
                                ref={yt}
                                type="text"
                                id="youtube"
                                name="youtube"
                                size={40}
                                defaultValue={ytid}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td />
                    </tr>
                    <tr>
                        <td>
                            <button onClick={handleUpload} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">Upload</button>
                            <h1><b className="text-red-600">DOESN'T WORK</b> Soon™</h1>
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
