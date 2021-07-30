import Badges from "../components/Badges";
import MarkdownEditor from "../components/MarkdownEditor";
import UserInfo from "../components/UserInfo";
import { useRouter } from "next/router";
import useSWR from 'swr';

const Dashboard = () => {
    const router = useRouter();
    const fetcher = (url) => fetch(url).then((r) => r.json());
	// const { data, error } = useSWR(`https://challenge-points-dev.herokuapp.com/api/users/${router.query.id}/data`, fetcher); // First API
    const { data, error } = useSWR(`https://challengepointsapi.herokuapp.com/api/users/${router.query.id}/data`, fetcher);      // Second API

    if (error) return <div>failed to load</div>;
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
            <MarkdownEditor config={data.config} token={router.query.t}/>
        </div>
    );
};

export default Dashboard;
