import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
	return (
		<Router>
			<div className='App'>
				<Switch>
					<PrivateRoute exact path='/friendPage' component={FriendList} />
					<Route exact path='/login' render={() => <Login />} />
					<Route component={Login} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
