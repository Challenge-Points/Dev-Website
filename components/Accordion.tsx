import { useState } from "react";

import users_userId_data from "./API/users_userId_data";
import users_global_page from "./API/users_global_page";

const Accordion = (props) => {
    const [isShowing, setIsShowing] = useState(false);

    const toggle = () => {
        setIsShowing(!isShowing);
    };

    var content;
    switch (props.content) {
        case "users_userId_data":
            content = users_userId_data;
            break;

        case "users_global_page":
            content = users_global_page;
            break;
    }

    return (
        <div style={{
                width: "100%",
                marginBottom: "15px",
                lineHeight: "15px",
                border: "1px solid rgba(209, 213, 219, 0.5)"
            }}>
            <button className="accordion" onClick={toggle} type="button">
                <p>{props.title}</p>
            </button>
            <div style={{
                    display: isShowing ? "block" : "none",
                    padding: "5px"
            }}
            dangerouslySetInnerHTML={{
                __html: content
            }}/>
        </div>
    );
}

export default Accordion;