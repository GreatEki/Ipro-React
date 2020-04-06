import React from 'react';
import Home from './components/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Men from './components/Men';
import Women from './components/Women';
import Businessmen from './components/men/Businessmen';
import Everydaymen from './components/men/Everydaymen';
import Culturemen from './components/men/Culturemen';
import Leisuremen from './components/men/Leisuremen';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/women' component={Women} />
					<Route exact path='/business/men' component={Businessmen} />
					<Route exact path='/everyday/men' component={Everydaymen} />
					<Route exact path='/culture/men' component={Culturemen} />
					<Route exact path='/leisure/men' component={Leisuremen} />
					<Route path='/men' component={Men} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
