const UserInfo = (props) => {
    var ID = props.id;
    var gitID = props.gitid;
    var malID = props.malid;
    var redditID = props.redditid;
    var SSID = props.ssid;
    var steamID = props.steamid;
    var twitchID = props.twitchid;
    var twitterID = props.twitterid;
    var YTID = props.ytid;
    return ( 
        <div>
            <tabel>
                <tbody>
                    <tr>
                        <td><label for="fname">Username: &nbsp;</label></td>
                        <td><input type="text" id="username" name="username" minlength="3" size="40" value={`${ID}`} onChange=""/></td>
                    </tr>
                    <tr>
                        <td><label for="fname">Github: &nbsp;</label></td>
                        <td><input type="text" id="github" name="github" size="40" value={`${gitID}`} onChange=""/></td>
                    </tr>
                    <tr>
                        <td><label for="fname">MyAnimeList: &nbsp;</label></td>
                        <td><input type="text" id="myanimelist" name="myanimelist" size="40" value={`${malID}`} onChange=""/></td>
                    </tr>
                    <tr>
                        <td><label for="fname">Reddit: &nbsp;</label></td>
                        <td><input type="text" id="reddit" name="reddit" size="40" value={`${redditID}`} onChange=""/></td>
                    </tr>
                    <tr>
                        <td><label for="fname">ScoreSaber: &nbsp;</label></td>
                        <td><input type="text" id="scoresaber" name="scoresaber" size="40" value={`${SSID}`} onChange=""/></td>
                    </tr>
                    <tr>
                        <td><label for="fname">Steam: &nbsp;</label></td>
                        <td><input type="text" id="steam" name="steam" size="40" value={`${steamID}`} onChange=""/></td>
                    </tr>
                    <tr>
                        <td><label for="fname">Twitch: &nbsp;</label></td>
                        <td><input type="text" id="twitch" name="twitch" size="40" value={`${twitchID}`} onChange=""/></td>
                    </tr>
                    <tr>
                        <td><label for="fname">Twitter: &nbsp;</label></td>
                        <td><input type="text" id="twitter" name="twitter" size="40" value={`${twitterID}`} onChange=""/></td>
                    </tr>
                    <tr>
                        <td><label for="fname">YouTube: &nbsp;</label></td>
                        <td><input type="text" id="youtube" name="youtube" size="40" value={`${YTID}`} onChange=""/></td>
                    </tr>
                </tbody>
            </tabel>
        </div>
     );
}
 
export default UserInfo;