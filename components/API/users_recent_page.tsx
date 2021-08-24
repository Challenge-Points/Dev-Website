import ReactDOMServer from 'react-dom/server';

const users_recent_page = ReactDOMServer.renderToStaticMarkup(doc())

function doc() {
    return (
    <div className="panel">
        <br />
        <h1><b>GET /users/:userId/scores/:limit</b></h1>
        <br />
        <hr />
        <br />
        <table id="api" className="apiTable">
            <thead>
                <tr>
                    <th>
                        <b>Parameters</b>
                    </th>
                    <th>
                        <b>Description</b>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <p>page</p>
                    </td>
                    <td>
                        <p>The page number of the global score page, 20 scores per page</p>
                    </td>
                </tr>
            </tbody>
        </table>
        <br />
    </div>
    )
}

export default users_recent_page;