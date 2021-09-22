import { useRouter } from "next/router";
import { useEffect } from 'react';
import firebase from "firebase";
import cookie from "js-cookie";

const Code = () => {
	const { query, isReady, push } = useRouter()
	if (!isReady) {
		return null;
	}

	var data = firebase.auth().signInWithCustomToken(query.t.toString())
		.then((userCredential) => {
			const user = userCredential.user;
			return { user }
		})
	
		cookie.set('Token', query.t.toString());

	useEffect(() => {
		setTimeout(() => {
			push(`/dashboard?id=${data['i'].user.uid}`);
		}, 3000)
	})
	return <div>Redirecting...</div>;
};

export default Code