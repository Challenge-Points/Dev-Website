import { useRouter } from "next/router";
import { useEffect } from 'react';
import firebase from "firebase";

const code = () => {
	const { query, isReady, push } = useRouter()
	if (!isReady) {
		return null;
	}

	var data = firebase.auth().signInWithCustomToken(query.t.toString())
		.then((userCredential) => {
			const user = userCredential.user;
			return { user }
		})
	
	useEffect(() => {
		setTimeout(() => {
			push(`/dashboard?id=${data['i'].user.uid}&t=${query.t}`);
		}, 3000)
	})
	return <div>Redirecting...</div>;
};

export default code