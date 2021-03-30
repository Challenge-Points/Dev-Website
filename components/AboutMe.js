import showdown from "showdown";

import styles from "../styles/Markdown.module.css";

const AboutMe = () => {
	var converter = new showdown.Converter();
	var html = converter.makeHtml("# hello");

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
