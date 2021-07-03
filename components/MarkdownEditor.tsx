import React from "react";


var value = ""

function renderPreview(event) {
    console.log(event.target.value)
    value = event.target.value;
}

const MarkdownEditor = (props) => {
    value = props.config.aboutme.toString()
    return (
        <div>
            <h3>About Me</h3>
            <br />
            <textarea
                className="MDE"
                rows={20}
                cols={130}
                wrap="off"
                defaultValue={value}
                //value={value}
                onChange={renderPreview}
            />
            <br />
            <h1><strong>preview</strong></h1>
            <br />
            <hr />
            <br />
            <div dangerouslySetInnerHTML={{ __html: value}}></div>
        </div>
    );
};

export default MarkdownEditor;
