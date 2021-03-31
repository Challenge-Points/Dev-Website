import Editor from "rich-markdown-editor";


const MarkdownEditor = () => {
    var AboutMe = "Get the MD file from the user and put it in this string!"
    return (
        <div>
        <h3>About Me</h3>
            <Editor
                defaultValue={AboutMe}
                dark />
        </div>
    );
}
 
export default MarkdownEditor;