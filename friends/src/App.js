import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import NavBar from './components/NavBar';
import FriendList from './components/FriendList';
import PrivateRoute from './components/PrivateRoute';

function App() {
	return (
		<Router>
			<div className='App'>
				<NavBar />
				<Switch>
					<PrivateRoute exact path='/friendlist' component={FriendList} />
					<Route exact path='/login' render={() => <Login />} />
					<Route component={Login} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
