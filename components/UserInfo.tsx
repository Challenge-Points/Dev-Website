const UserInfo = (props) => {
    props.config.gitid &&= `https://github.com/${props.config.gitid}`
    props.config.malid &&= `https://myanimelist.net/${props.config.malid}`
    props.config.redditid &&= `https://reddit.com/${props.config.redditid}`
    props.config.ssid &&= `https://scoresaber.com/${props.config.ssid}`
    props.config.steamid &&= `https://steamcommunity.com/${props.config.steamid}`
    props.config.twitchid &&= `https://twitch.tv/${props.config.twitchid}`
    props.config.twitterid &&= `http://twitter.com/${props.config.twitterid}`
    props.config.ytid &&= `https://www.youtube.com/${props.config.ytid}`
    return (
        <div>
            <table>
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
                                value={props.config.gitid}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="fname">
                                MyAnimeList: &nbsp;
                            </label>
                        </td>
                        <td>
                            <input
                                type="text"
                                id="myanimelist"
                                name="myanimelist"
                                size={40}
                                value={props.config.malid}
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
                                value={props.config.redditid}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="fname">
                                ScoreSaber: &nbsp;
                            </label>
                        </td>
                        <td>
                            <input
                                type="text"
                                id="scoresaber"
                                name="scoresaber"
                                size={40}
                                value={props.config.ssid}
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
                                value={props.config.steamid}
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
                                value={props.config.twitchid}
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
                                value={props.config.twitterid}
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
                                value={props.config.ytid}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default UserInfo;
