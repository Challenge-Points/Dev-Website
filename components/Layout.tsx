import Footer from "./Footer";
import Navbar from "./Navbar";
import Head from 'next/Head';

const Layout: React.FunctionComponent<{}> = ({ children }) => {
    return (
        <div className="content bg-white dark:bg-gray-900 dark:text-white min-h-screen flex flex-col">
            <Head>
                <link rel="shortcut icon" href="icons/favicon.ico" />
            </Head>
            <Navbar />
            <main className="max-w-6xl mx-auto p-8 flex-1 w-full">{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
