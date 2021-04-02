import Badges from "../components/badges";
import MarkdownEditor from "../components/markdowneditor";

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
};

export default Dashboard;
