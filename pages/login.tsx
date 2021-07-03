import Link from "next/link";
import React from "react";

const Login: React.FunctionComponent<{}> = () => {
    return ( 
        <div>
            <h1>Login</h1>
            <div>
                <h3>Instead of this being redirected to this page the user should be redirect to a login prompt.</h3>
                <h3>For now i put in a button which will redirect you to the dashboard</h3>
            </div>
            <br />
            <Link href="/dashboard?id=490534335884165121"><button><a className="p-2 px-3 bg-white bg-opacity-0 hover:bg-opacity-10 rounded">Go to dashboard</a></button></Link>
        </div>
     );
}
 
export default Login;