import React from 'react';
import Home from './components/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Men from './components/Men';
import Women from './components/Women';
import Businessmen from './components/men/Businessmen';
import Everydaymen from './components/men/Everydaymen';
import Culturemen from './components/men/Culturemen';
import Leisuremen from './components/men/Leisuremen';
import Businesswomen from './components/women/Businesswomen';
import Everydaywomen from './components/women/Everydaywomen';
import Culturewomen from './components/women/Culturewomen';
import Leisurewomen from './components/women/Leisurewomen';
import Product from './components/Product';
import CheckOut from './components/Checkout';
import SignUp from './components/users/SignUp';
import SignIn from './components/users/SignIn';
import Dashboard from './components/users/Dashboard';
function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/products' component={Product} />
					<Route exact path='/business' component={Product} />
					<Route exact path='/everyday' component={Product} />
					<Route exact path='/culture' component={Product} />
					<Route exact path='/leisure' component={Product} />
					<Route exact path='/business/men' component={Businessmen} />
					<Route exact path='/everyday/men' component={Everydaymen} />
					<Route exact path='/culture/men' component={Culturemen} />
					<Route exact path='/leisure/men' component={Leisuremen} />
					<Route path='/men' component={Men} />
					<Route exact path='/business/women' component={Businesswomen} />
					<Route exact path='/everyday/women' component={Everydaywomen} />
					<Route exact path='/culture/women' component={Culturewomen} />
					<Route exact path='/leisure/women' component={Leisurewomen} />
					<Route path='/women' component={Women} />
					<Route path='/checkout' component={CheckOut} />
					<Route path='/users/signup' component={SignUp} />
					<Route path='/users/signin' component={SignIn} />
					<Route path='/users/dashboard' component={Dashboard} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
