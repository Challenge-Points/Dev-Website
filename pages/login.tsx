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
            <Link href="/dashboard"><button>Go to dashboard</button></Link>
        </div>
     );
}
 
export default Login;