import Layout from "../components/Layout";
import "../styles/globals.css";
import firebase from "firebase";

if (firebase.apps.length === 0) {
    firebase.initializeApp({
        apiKey: "AIzaSyDPQyaLQqnrh7ND0L6Cx15Z767e9Y-ySQI",
        authDomain: "challengepoints-475e8.firebaseapp.com",
        projectId: "challengepoints-475e8",
        storageBucket: "challengepoints-475e8.appspot.com",
        messagingSenderId: "346989639850",
        appId: "1:346989639850:web:5060fc22edca166c70b8d3",
        measurementId: "G-J1ZB2KBLGF"
      });
}

const App = ({Component, pageProps}) => (
    <Layout>
        <Component {...pageProps} />
    </Layout>
);
export default App;