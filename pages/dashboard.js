import Badges from "../components/Badges"
import MarkdownEditor from "../components/MarkdownEditor"

const Dashboard = () => {
    return ( 
        <div>
            <h1>Dashboard</h1>
            <div>
                <Badges />
            </div>
            <div>
                <MarkdownEditor />
            </div>
        </div>
     );
}
 
export default Dashboard;