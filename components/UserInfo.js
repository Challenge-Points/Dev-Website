import { useRouter } from "next/router";

export const getServerSideProps = async () => {
    const router = useRouter();
	var res = await fetch(`https://challenge-points-dev.herokuapp.com/api/users/${router.query.id}/data/`);
	var data = await res.json();

	return {
		props: { data },
	};
};

const UserInfo = (props) => {
    return ( 
        <div>
            {props.data.map((config) => {
			    return (
            <tabel>
                <tbody>
                    <tr>
                        <td><label for="fname">Username: &nbsp;</label></td>
                        <td><input type="text" id="username" name="username" minlength="3" size="40" value={`${config.config.username}`} onChange=""/></td>
                    </tr>
                    <tr>
                        <td><label for="fname">Github: &nbsp;</label></td>
                        <td><input type="text" id="github" name="github" size="40" value={`${config.config.id}`} onChange=""/></td>
                    </tr>
                    <tr>
                        <td><label for="fname">MyAnimeList: &nbsp;</label></td>
                        <td><input type="text" id="myanimelist" name="myanimelist" size="40" value={`${config.config.id}`} onChange=""/></td>
                    </tr>
                    <tr>
                        <td><label for="fname">Reddit: &nbsp;</label></td>
                        <td><input type="text" id="reddit" name="reddit" size="40" value={`${config.config.id}`} onChange=""/></td>
                    </tr>
                    <tr>
                        <td><label for="fname">ScoreSaber: &nbsp;</label></td>
                        <td><input type="text" id="scoresaber" name="scoresaber" size="40" value={`${user.id}`} onChange=""/></td>
                    </tr>
                    <tr>
                        <td><label for="fname">Steam: &nbsp;</label></td>
                        <td><input type="text" id="steam" name="steam" size="40" value={`${user.id}`} onChange=""/></td>
                    </tr>
                    <tr>
                        <td><label for="fname">Twitch: &nbsp;</label></td>
                        <td><input type="text" id="twitch" name="twitch" size="40" value={`${user.id}`} onChange=""/></td>
                    </tr>
                    <tr>
                        <td><label for="fname">Twitter: &nbsp;</label></td>
                        <td><input type="text" id="twitter" name="twitter" size="40" value={`${user.id}`} onChange=""/></td>
                    </tr>
                    <tr>
                        <td><label for="fname">YouTube: &nbsp;</label></td>
                        <td><input type="text" id="youtube" name="youtube" size="40" value={`${user.id}`} onChange=""/></td>
                    </tr>
                </tbody>
            </tabel>
            );})}
        </div>
     );
}
 
export default UserInfo;