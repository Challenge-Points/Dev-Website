import showdown from "showdown";
import styles from "../styles/Markdown.module.css";
//import fs from "fs";

const AboutMe = () => {
	//var data = fs.readFile("./imports/AboutMe.md", "utf8")
	var data = "Pog"
	var converter = new showdown.Converter();
	var html = converter.makeHtml(data);

	return (
		<div>
			<article>
				<h1 className="white">About Me</h1>
				<div dangerouslySetInnerHTML={{ __html: html }} className={styles.mdContainer}></div>
			</article>
		</div>
	);
};

export default AboutMe;

