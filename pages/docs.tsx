import Accordion from "../components/Accordion";

const Docs = () => {
    return(
        <div>
            <div>
                <h1>API Documentation</h1>
                <p>V1.0.0 REST</p>
            </div>
            <br />
            <div>
                <Accordion title="users/:userId/data" content="users_userId_data" />
                <Accordion title="users/global/:page" content="users_global_page" />
            </div>
        </div>
    );
}

export default Docs;