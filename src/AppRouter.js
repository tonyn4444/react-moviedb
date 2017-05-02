import { Route, BrowserRouter as Router, Link} from 'react-router-dom';
import React from 'react';
import App from './App';
import Explore from './components/Explore';

const AppRouter = () => {
	return (
		<Router>
			<div>
				<ul>
					<Link to="/"><li>Home</li></Link>
					<Link to="/explore"><li>Explore</li></Link>
				</ul>

				<hr />
			<Route exact path="/" component={App} />
			<Route path="/explore" component={Explore} />
			</div>
		</Router>
	)
}

export default AppRouter;