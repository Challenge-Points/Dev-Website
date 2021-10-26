import React from "react";
import { useRouter } from 'next/router';
import axios from "axios";

const Register = () => {
	const router = useRouter()
	const [nope, setValue] = React.useState("");
	const registrationCode = React.useRef(null);
	const handleUpload = () => {
		const res = axios.get(`https://api.challengepoints.net/api/users/register/${registrationCode.current.value}/${router.query.t}`).then(res => {
				if (res.status == 403) {
					setValue("Invalid code. Please double check if the code you used is correct. If it still doesnt work please way a visit to the #support channel in our discord!");
				} else if (res.status == 200) {
					setValue(`<h1>Registration Sucessfull!</h1><br /><a href="https://challengepoints.net/code?t=${router.query.t}"><button>Go to Dashboard</button></a>`)
				} else {
					console.log(res.status)
				}
			}).catch(function (error) {setValue("<h1>You are already registered or you inputed a invalid code. Please double check if the code you used is correct. If it still doesnt work please way a visit to the #support channel in our discord!</h1>"); console.log(error)} )
		}

	function handleHTML() {
		return {__html: nope}
	}
	return (
		<div>
			<h1>Registration Code:</h1>
			<input
                ref={registrationCode}
                type="text"
                id="registrationCode"
                name="registrationCode"
                minLength={3}
                size={40}
            />
			<br />
			<br />
			<button onClick={handleUpload} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">Upload</button>
			<div dangerouslySetInnerHTML={handleHTML()} />
		</div>
	)
};

export default Register;