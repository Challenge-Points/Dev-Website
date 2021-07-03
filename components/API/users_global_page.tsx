const users_global_page = '<div class="panel"> <br /> <h1><b>GET /users/global/:page</b></h1> <br /> <hr /> <br /> <table id="api" class="apiTable"> <thead> <tr> <th> <b>Parameters</b> </th> <th> <b>Description</b> </th> </tr> </thead> <tbody> <tr> <td> <p>page</p> </td> <td> <p>The page number of the global score page, 20 scores per page</p> </td> </tr> </tbody> </table> <br /> </div>';

/* Page in HTML form, delete comments to edit
function yes() {
    return (
    <div class="panel">
        <br />
        <h1><b>GET /users/:userId/scores/:limit</b></h1>
        <br />
        <hr />
        <br />
        <table id="api" class="apiTable">
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
*/

export default users_global_page;