import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Loading from './components/Loading';

export const useAuthCheck = () => {
	const [checkingAuth, setCheckingAuth] = useState(true);
	const [redirect, setRedirect] = useState(false);

	useEffect(() => {
		axios.get('/user/checkAuth').then(({ status }) => {
			if (status !== 200) setRedirect(true);
			setCheckingAuth(false)
		}).catch(() => {
			setRedirect(true);
			setCheckingAuth(false);
		})
	}, []);

	return [checkingAuth, redirect];
};

// Wrapper for checking if user is authorized before reaching protected component
const AuthWrapper = ({ children }) => {
	const [checkingAuth, redirect] = useAuthCheck();

	if (checkingAuth) return <Loading />;
	if (redirect) return <Redirect to="/login" />;
	return children;
};

export default AuthWrapper;