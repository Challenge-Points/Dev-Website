import ReactDOMServer from 'react-dom/server';

const users_global_page = ReactDOMServer.renderToStaticMarkup(doc())

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
                        <p>userId</p>
                    </td>
                    <td>
                        <p>The ID of the user you want to acquire info from</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>limit</p>
                    </td>
                    <td>
                        <p>The max amount of scores that will be returned</p>
                    </td>
                </tr>
            </tbody>
        </table>
        <br />
    </div>
    )
}

export default users_global_page;