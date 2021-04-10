
import Badges from "../components/Badges"
import MarkdownEditor from "../components/MarkdownEditor"
import UserInfo from "../components/UserInfo";
import { useRouter } from "next/router";

const Dashboard = () => {
    const router = useRouter();
    return ( 
        <div>
            <h1>Dashboard</h1>
                <UserInfo id={router.query.id} gitid={router.query.gitid} ytid={router.query.ytid}/>
                <Badges />
                <MarkdownEditor />
        </div>
     );
}
 
export default Dashboard;