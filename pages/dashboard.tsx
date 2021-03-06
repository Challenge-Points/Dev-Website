import Badges from "../components/Badges";
import MarkdownEditor from "../components/MarkdownEditor";
import UserInfo from "../components/UserInfo";
import { useRouter } from "next/router";
import useSWR from 'swr';
import Link from "next/link";
import cookie from "js-cookie";

const Dashboard = () => {
    const router = useRouter();
    const fetcher = (url) => fetch(url).then((r) => r.json());
    const { data, error } = useSWR(`https://api.challengepoints.net/api/users/${router.query.id}/data`, fetcher);

    if (error) return (
        <div>
            <div>failed to load</div>
            <br />
            first time loging in? try this <a className="text-blue-300"><Link href={`https://api.challengepoints.net/api/users/register/${router.query.id}/${cookie.get('Token')}`}>button</Link></a>!
            <br />
            <br />
            <hr />
            <br />
            <h1 className="text-red-600">WARNING</h1>
            <h1><b>do <strong>NOT</strong> press when your already a registed user!</b></h1>
            <h1>This will reset your user profile and all your scores will be deleted!</h1>
            <p>Accidentally pressed the button? Create a ticket on the github or go to our <a className="text-blue-300" href="https://discord.com/channels/812293813518991390/828188437772763146">#support</a> channel in our <a className="text-blue-300" href="https://discord.gg/SaEgfnepn7">Discord</a> server</p>
        </div>
        );
    if (!data) return <div>loading...</div>;

    return (
        <div>
            <h1><strong>Dashboard</strong></h1>
            <br />
            <hr />
            <br />
            <UserInfo id={router.query.id} config={data.config} username={data.username} token={cookie.get('Token')}/>
            <br />
            <hr />
            <br />
            <Badges id={router.query.id} badges={data.badges} token={cookie.get('Token')}/>
            <br />
            <hr />
            <br />
            <h3>About Me</h3>
            <br />
            <MarkdownEditor config={data.config} token={cookie.get('Token')} id={router.query.id}/>
        </div>
    );
};

export default Dashboard;
