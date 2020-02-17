import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

/* 
PrivateRoute rules:
1. It has the same API as <Route />. 
2. It renders a <Route />, and passes all the props through to it. 
3. It checks if the user is authenticated. If they are, it renders the "component" prop. If not, it re-directs the user to /login. 
*/

const PrivateRoute = ({ component: Component, render: Render, ...rest }) => {
	// const Component = props.component
	return (
		<Route
			{...rest}
			render={(props) => {
				if (localStorage.getItem('token')) {
					if (Component) return <Component {...props} />;
					if (Render) return Render(props);
				} else {
					<Redirect to='login' />;
				}
			}}
		/> // Route closing
	);
};

export default PrivateRoute;
