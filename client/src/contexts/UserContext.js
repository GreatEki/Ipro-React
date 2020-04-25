import React, { createContext, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export const UserContext = createContext();

const UserContextProvider = (props) => {
	let history = useHistory();
	const [newUser, setNewUser] = useState({
		firstname: '',
		lastname: '',
		email: '',
		password: '',
	});

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [authUser, setAuthUser] = useState({});
	const [token, setToken] = useState('');
	const [isAuth, setIsAuth] = useState(false);
	const [msg, setMsg] = useState('');

	//DESC: Method handles receiving values from our input fields in SignUp.js and SignIn.js Component
	const handleUserInput = (e) => {
		setNewUser({
			...newUser,
			[e.target.name]: e.target.value,
		});
	};

	//This method handles the submit action in Signing up a new user.
	//Method is called in SignUp.js Component
	const handleUserSubmit = (e, user) => {
		e.preventDefault();
		signUpUser(user);
	};

	//DESC: This method handles the submit action when a user signs in
	//Method is called in the SignIn.js component
	const handleSignInSubmit = (e) => {
		e.preventDefault();

		const user = {
			email,
			password,
		};
		signInUser(user);
	};

	//This method handles signing up a new user in the SignUp.js component
	const signUpUser = async (user) => {
		const config = {
			header: {
				'Content-Type': 'application/json',
			},
		};
		try {
			const res = await axios.post(
				'http://localhost:5000/api/users/auth/signup',
				user,
				config
			);

			console.log(res);
			setMsg(res.data.message);
		} catch (err) {
			setMsg(err.message);
		}
	};

	//DESC: Method handles the login fucntionality in our SignIn.js Component
	const signInUser = async (user) => {
		const config = {
			header: {
				'Content-Type': 'application/json',
			},
		};

		try {
			const res = await axios.post(
				'http://localhost:5000/api/users/auth/signin',
				user,
				config
			);

			//console.log(res);
			setAuthUser({
				id: res.data.user._id,
				firstname: res.data.user.firstname,
				lastname: res.data.user.lastname,
				email: res.data.user.email,
			});

			setToken(res.data.token);
			localStorage.setItem('auth', JSON.stringify(res.data.token));
			setMsg(res.data.message);
			setIsAuth(true);

			history.push('/users/auth/dashboard');
		} catch (err) {
			if (err) {
				err.message = 'Invalid Credentials';
				setMsg(err.message);
			} else {
				setMsg('');
			}
		}
	};

	const logout = () => {
		setToken('');
		localStorage.removeItem('auth');
		history.push('/users/signin');
		window.location.reload(true);
	};
	return (
		<UserContext.Provider
			value={{
				email,
				password,
				newUser,
				setEmail,
				setPassword,
				handleUserInput,
				handleUserSubmit,
				signUpUser,
				msg,
				isAuth,
				signInUser,
				handleSignInSubmit,
				logout,
			}}>
			{props.children}
		</UserContext.Provider>
	);
};

export default UserContextProvider;
