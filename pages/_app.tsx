import Layout from "../components/Layout";
import "../styles/globals.css";
import React from "react";

const App = ({Component, pageProps}) => (
    <Layout>
        <Component {...pageProps} />
    </Layout>
);
export default App;
