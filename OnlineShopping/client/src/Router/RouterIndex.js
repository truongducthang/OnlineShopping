import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../Components/Home/Home';
import AllProducts from '../Components/AllProducts/AllProducts';
function RouterIndex(props) {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/Home">
					<Home />
				</Route>
				<Route exact path="/all-products">
					<AllProducts />
				</Route>
				{/* <Route
				path="/tin-tuc-chi-tiet/:slug.:id.html"
				component={NewsDetail}
			></Route>{' '} */}
				{/* <Route path="/tin-tuc/" component={NewsDetail}>
                          </Route> */}{' '}
				{/* <Route path="/lien-he" component={Contact}></Route>{' '} */}
			</Switch>
		</Router>
	);
}

export default RouterIndex;
