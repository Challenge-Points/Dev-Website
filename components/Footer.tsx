const Footer: React.FunctionComponent<{}> = () => {
    return (
        <footer className="bg-gray-800 text-gray-300">
            <div className="max-w-6xl mx-auto p-8">
                © {new Date().getFullYear()} Challenge Points
            </div>
        </footer>
    );
};

export default Footer;
