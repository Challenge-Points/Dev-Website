import React from "react";
import Editor from "react-markdown-editor-lite";
import xssFilter from "showdown-xss-filter";
import showdown from "showdown";
import axios from "axios";

const MarkdownEditor = (props) => {
    const fetcher = (url) => fetch(url).then((r) => r.json());
    const mdEditor = React.useRef(null);
    const [value, setValue] = React.useState(props.config.aboutme);
    const converter = new showdown.Converter({ extensions: [xssFilter] });
    converter.setOption("omitExtraWLInCodeBlocks", true);
    converter.setOption("noHeaderId", false);
    converter.setOption("parseImgDimensions", true);
    converter.setOption("simplifiedAutoLink", true);
    converter.setOption("literalMidWordUnderscores", true);
    converter.setOption("strikethrough", true);
    converter.setOption("underline", true);
    converter.setOption("tables", true);
    converter.setOption("tablesHeaderId", false);
    converter.setOption("ghCodeBlocks", true);
    converter.setOption("tasklists", true);
    converter.setOption("smoothLivePreview", true);
    converter.setOption("prefixHeaderId", false);

    const handleEditorChange = ({ html, text }) => {
        setValue(text);
    };

    const handleUpload = () => {
        const data = {
            data: value
        };
        //axios.post(`http://challenge-points-dev.herokuapp.com/api/users/aboutme/${props.id}/update/${props.token}`, data); // First API
        axios.post(`http://challengepointsapi.herokuapp.com/api/users/aboutme/${props.id}/update/${props.token}`, data);      // Second API
    };

    return (
        <div>
            <Editor
                ref={mdEditor}
                value={value}
                style={{ height: "500px" }}
                onChange={handleEditorChange}
                renderHTML={(text) => converter.makeHtml(text)}
                placeholder={
                    "Unsure on how to start? We have a cheatsheet ready to go right here! https://www.markdownguide.org/cheat-sheet/ "
                }
            />
            <br />
            <button onClick={handleUpload} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">Upload</button>
        </div>
    );
};

export default MarkdownEditor;
