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
                <Accordion title="maps/:mapHash/:diff/scores/:limit/:page" content="maps_mapHash_diff_scores_limit_page" />
                <Accordion title="maps/all/:page" content="maps_all_page" />
                <Accordion title="maps/hash/:mapHash" content="maps_hash_mapHash" />
                <Accordion title="maps/queue/:page" content="maps_queue_page" />
                <Accordion title="stats/all" content="stats_all" />
                <Accordion title="stats/status" content="stats_status" />
                <Accordion title="users/:userId/data" content="users_userId_data" />
                <Accordion title="users/:userId/scores/:limit" content="users_userId_scores_limit" />
                <Accordion title="users/global/:page" content="users_global_page" />
                <Accordion title="users/recent/:page" content="users_recent_page" />
            </div>
        </div>
    );
}

export default Docs;