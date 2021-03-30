import Link from "next/Link";
import https from "https";

const Users = () => {
    return (
        <div>
        <h1>Users</h1>
        <Link href="/users/490534335884165121"><a>490534335884165121</a></Link>
        </div>
     );
}
 
export default Users;

function getUsername (userID) {
    var options = {
        method: 'GET',
        url: 'https://discord.com/api/users/{userID}'.replace("{userID}", userID),
        headers: {
            'Authorization': 'Bot NzkwMTg5MTE0NzExNjA1MjYw.X98-9Q.bZaN6w_XMYbj5acjywaTKoZrPVo'
        }};
    const req = https.request(options, (res) => {
        res.setEncoding('utf8');
        res.on('data', (chunk) => {
            console.log(`BODY: ${chunk}`);
        });
        res.on('end', () => {
            console.log('No more data in response.');
        });
      });

      req.on('error', (e) => {
        console.error(`problem with request: ${e.message}`);
      });

      return( req );
};