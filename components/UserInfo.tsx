import { useRouter } from "next/router";

export const getServerSideProps = async () => {
    const router = useRouter();
    var res = await fetch(
        `https://challenge-points-dev.herokuapp.com/api/users/${router.query.id}/data/`
    );
    var data = await res.json();

    return {
        props: { data },
    };
};

const UserInfo = (props) => {
    // TODO: implement user
    const user = {id: ''}
    return (
        <div>
            {props.data.map((config) => {
                return (
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
                                        value={`${config.config.username}`}
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
                                        value={`${config.config.id}`}
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
                                        value={`${config.config.id}`}
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
                                        value={`${config.config.id}`}
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
                                        value={`${user.id}`}
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
                                        value={`${user.id}`}
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
                                        value={`${user.id}`}
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
                                        value={`${user.id}`}
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
                                        value={`${user.id}`}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                );
            })}
        </div>
    );
};

export default UserInfo;
