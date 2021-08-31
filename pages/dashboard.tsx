import Badges from "../components/Badges";
import MarkdownEditor from "../components/MarkdownEditor";
import UserInfo from "../components/UserInfo";
import { useRouter } from "next/router";
import useSWR from 'swr';
import Link from "next/link";

const Dashboard = () => {
    const router = useRouter();
    const fetcher = (url) => fetch(url).then((r) => r.json());
	// const { data, error } = useSWR(`https://challenge-points-dev.herokuapp.com/api/users/${router.query.id}/data`, fetcher); // First API
    const { data, error } = useSWR(`https://challengepointsapi.herokuapp.com/api/users/${router.query.id}/data`, fetcher);      // Second API

    if (error) return (
        <div>
            <div>failed to load</div>
            <br />
            first time loging in? try this <a className="text-blue-300"><Link href={`https://challengepointsapi.herokuapp.com/api/users/register/${router.query.id}/${router.query.t}`}>button</Link></a>!
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
            <UserInfo id={router.query.id} config={data.config} username={data.username} token={router.query.t}/>
            <br />
            <hr />
            <br />
            <Badges id={router.query.id} badges={data.badges} token={router.query.t}/>
            <br />
            <hr />
            <br />
            <h3>About Me</h3>
            <br />
            <MarkdownEditor config={data.config} token={router.query.t} id={router.query.id}/>
        </div>
    );
};

export default Dashboard;
