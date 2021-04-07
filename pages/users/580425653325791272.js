import Link from "next/link";
import Image from "next/image";

const User580425653325791272 = () => {
	return (
		<div class="userinfo">
			<Image src="/team/Aso.gif" alt="Aso pfp" class="picture" width="200" height="200" />
			<div class="margin-left-10">
				<h1>Aso</h1>
				<h3 class="gray">"I hate CSS"</h3>
				<h1>
					{" "}
					&gt;
					<Link href="https://discordapp.com/users/580425653325791272">
					<a>
						<Image src="/../public/icons/DiscordLogo.png" class="icon" width="20" height="20" />
					</a>
					</Link>
					<a href="https://github.com/AsoDesu/">
						<Image src="/../public/icons/GithubLogo.png" class="icon" width="20" height="20" />
					</a>
					<a href="https://twitch.tv/asodesu_">
						<Image src="/../public/icons/TwitchLogo.png" class="icon" width="20" height="20" />
					</a>
					<a href="https://twitter.com/AsoDesu_">
						<Image src="/../public/icons/TwitterLogo.png" class="icon" width="20" height="20" />
					</a>
					<a href="https://www.reddit.com/user/AsoDesu_">
						<Image src="/../public/icons/RedditLogo.png" class="icon" width="20" height="20" />
					</a>
				</h1>
			</div>
		</div>
	);
};

export default User580425653325791272;
