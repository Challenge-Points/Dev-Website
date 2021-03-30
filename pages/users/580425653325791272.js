import Link from 'next/Link';
import Image from 'next/Image';

const User580425653325791272 = () => {
    return ( 
        <div class="userinfo">
            <Image src="/../public/team/ThiJNmEnS.png" alt="ThiJNmEnS pfp" class="picture" width="200" height="200"/>
            <div class="margin-left-10">
                <h1>Aso</h1>
                <h3 class="gray">"I hate CSS"</h3>
                <h1> &gt;
                <Link href="https://discordapp.com/users/490534335884165121"><a><Image src="/../public/icons/DiscordLogo.png" class="icon" width="20" height="20" /></a></Link>
                <a href="https://scoresaber.com/u/76561198446051555"><Image src="/../public/icons/ScoreSaberLogo.png" class="icon" width="20" height="20" /></a>
                <a href="https://github.com/thijnmens/"><Image src="/../public/icons/GithubLogo.png" class="icon" width="20" height="20" /></a>
                <a href="https://steamcommunity.com/id/Thijnmens/"><Image src="/../public/icons/SteamLogo.png" class="icon" width="20" height="20" /></a>
                <a href="https://twitch.tv/thijnmens"><Image src="/../public/icons/TwitchLogo.png" class="icon" width="20" height="20" /></a>
                <a href="https://myanimelist.net/profile/Thijnmens"><Image src="/../public/icons/MyAnimeListLogo.png" class="icon" width="20" height="20" /></a>
                </h1>
            </div>
        </div>
     );
}
 
export default User580425653325791272;