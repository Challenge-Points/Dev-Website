import ReactDOMServer from 'react-dom/server';
import React from 'react';

const maps_mapHash_diff_scores_limit_page = ReactDOMServer.renderToStaticMarkup(doc())

function doc() {
    return (
    <div className="panel">
        <br />
        <h1><b>GET /maps/:mapHash/:diff/scores/:limit/:page</b></h1>
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
                    <th>
                        <b>Example</b>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <p>mapHash</p>
                    </td>
                    <td>
                        <b>The hash of the map you want to acquire info from</b>
                    </td>
                    <td>
                        <p>"12c781a279bb0ee658b948e842d768224cffdbfc"</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>diff</p>
                    </td>
                    <td>
                        <b>The difficulity you want to get the info from</b>
                    </td>
                    <td>
                    <p>"ExpertPlus"</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>limit</p>
                    </td>
                    <td>
                        <b>The max amount of scores that will be returned</b>
                    </td>
                    <td>
                        <p>Range of 1 to 20</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>page</p>
                    </td>
                    <td>
                        <b>The offset of the scores list</b>
                    </td>
                    <td>
                        <p>Range of 1 to ∞</p>
                    </td>
                </tr>
            </tbody>
        </table>
        <br />
        <hr />
        <br />
        <h1><b>Example Request</b></h1>
        <table id="api" className="apiTable">
            <thead>
                <tr>
                    <th>
                        <p> </p>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <b><a href="http://api.challengepoints.net/api/maps/12c781a279bb0ee658b948e842d768224cffdbfc/expertPlus/scores/2/1">http://api.challengepoints.net/api/maps/12c781a279bb0ee658b948e842d768224cffdbfc/expertPlus/scores/2/1</a></b>
                    </td>
                </tr>
            </tbody>
        </table>
        <br />
        <hr />
        <br />
        <h1><b>Example Response</b></h1>
        <table id="api" className="apiTable">
            <thead>
                <tr>
                    <th>
                        <p> </p>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <textarea value={'[\n	{\n		"cp":310.7,\n		"user_id":"490534335884165121",\n		"time":1627810003,\n		"diff":"expert+",\n		"score":458621,\n		"acc":80.7,\n		"map_hash":"12c781a279bb0ee658b948e842d768224cffdbfc",\n		"name":"Thijnmens"\n	},\n	{\n		"cp":245.0,\n		"user_id":"580425653325791272",\n		"time":1627870003,\n		"diff":"expert+",\n		"score":37802,\n		"acc":60.4,\n		"map_hash":"12c781a279bb0ee658b948e842d768224cffdbfc",\n		"name":"Aso"\n	}\n]'} cols={100} rows={23} readOnly/>
                    </td>
                </tr>
            </tbody>
        </table>
        <br />
    </div>
    )
}


export default maps_mapHash_diff_scores_limit_page;