import React from 'react';
import Home from './components/Home';
import { BrowserRouter, Route } from 'react-router-dom';
import Men from './components/Men';
import Women from './components/Women';
function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Route exact path='/' component={Home} />
				<Route path='/men' component={Men} />
				<Route path='/women' component={Women} />
			</BrowserRouter>
		</div>
	);
}

export default App;
