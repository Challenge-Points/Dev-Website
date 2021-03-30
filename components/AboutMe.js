import marked from "marked";
import { readFileSync, writeFileSync } from "fs";

function generateAboutMe() {
	var aboutMe = readFileSync("../imports/AboutMe.md", "utf-8");
	var markdownAboutMe = marked(aboutMe);

	writeFileSync("./AboutMe.html", markdownAboutMe);
}
window.onload = generateAboutMe;

const AboutMe = () => {
    return ( 
        <div>
            <article>
				<h1 class="white">About Me</h1>
				<object style="size: 100px" width="800px" height="800px" data="AboutMe.html"
					type="text/html"></object>
            </article>
        </div>
     );
}
 
export default AboutMe;