import showdown from "showdown";
import React from "react";

function updatePreview(event, type?) {
    var converter = new showdown.Converter();
    
    if (event == "") {
        var newhtml = converter.makeHtml("Type something here to update your AboutMe!");
        var value = {__html: newhtml}
        if(type == "value") {
            return "Type something here to update your AboutMe!";
        }
        else {
            return <div dangerouslySetInnerHTML={value} />;
        }
    }
    else {
        var newdata = event.target.value;
        var newhtml = converter.makeHtml(newdata);
        var value = {__html: newhtml}
        return <div dangerouslySetInnerHTML={value}/>;
    }
}

const MarkdownEditor = () => {
    let previewref = React.createRef();
    var html = updatePreview("")
    

    return (
        <div>
            <h3>About Me</h3>
            <textarea class="MDE" rows="20" cols="130" wrap="off" defaultValue={updatePreview("", "value")} onChange={(event) => updatePreview(event, previewref)}/>
            <h5>preview</h5>
            <div ref={previewref}>
                {html}
            </div>
        </div>
    );
};
 
export default MarkdownEditor;