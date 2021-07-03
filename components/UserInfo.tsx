const UserInfo = (props) => {
    if (props.config.gitid != null) {
        props.config.gitid = "https://github.com/" + props.config.gitid;
    }
    if (props.config.malid != null) {
        props.config.malid = "https://myanimelist.net/profile/" + props.config.malid;
    }
    if (props.config.redditid != null) {
        props.config.redditid = "https://www.reddit.com/user/" + props.config.redditid;
    }
    if (props.config.ssid != null) {
        props.config.ssid = "https://scoresaber.com/u/" + props.config.ssid;
    }
    if (props.config.steamid != null) {
        props.config.steamid = "https://steamcommunity.com/id/" + props.config.steamid;
    }
    if (props.config.twitchid != null) {
        props.config.twitchid = "https://twitch.tv/" + props.config.twitchid;
    }
    if (props.config.twitterid != null) {
        props.config.twitterid = "https://twitter.com/" + props.config.twitterid;
    }
    if (props.config.ytid != null) {
        props.config.ytid = "https://www.youtube.com/channel/" + props.config.ytid;
    }
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
