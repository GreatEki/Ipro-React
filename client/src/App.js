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
import Cart from './components/Cart';
import Shop from './components/Shop';
import Search from './components/Search';
import ProductsContextProvider from './contexts/ProductsContext';
import CartContextProvider from './contexts/CartContext';
import UserContextProvider from './contexts/UserContext';
import OrderContextProvider from './contexts/OrderContext';
import SearchContextProvider from './contexts/SearchContext';
import Leisure from './components/Leisure';
import CategoryMenuContextProvider from './contexts/CategoryMenuContext';
import context from './contexts/UserContext';
import PrivateRoute from './components/users/PrivateRoute';
import Business from './components/Business';
import Culture from './components/Culture';
import EveryDay from './components/Everyday';
function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Switch>
					<ProductsContextProvider>
						<CartContextProvider>
							<UserContextProvider>
								<OrderContextProvider>
									<SearchContextProvider>
										<CategoryMenuContextProvider>
											<Route exact path='/' component={Home} />
											<Route path='/shop' component={Shop} />
											<Route path='/search/:val' component={Search} />
											<Route
												exact
												path='/product/:title/:id'
												component={Product}
											/>
											<Route exact path='/business' component={Business} />
											<Route exact path='/everyday' component={EveryDay} />
											<Route exact path='/culture' component={Culture} />
											<Route exact path='/leisure' component={Leisure} />
											<Route
												exact
												path='/business/men'
												component={Businessmen}
											/>
											<Route
												exact
												path='/everyday/men'
												component={Everydaymen}
											/>
											<Route exact path='/culture/men' component={Culturemen} />
											<Route exact path='/leisure/men' component={Leisuremen} />
											<Route path='/men' component={Men} />
											<Route
												exact
												path='/business/women'
												component={Businesswomen}
											/>
											<Route
												exact
												path='/everyday/women'
												component={Everydaywomen}
											/>
											<Route
												exact
												path='/culture/women'
												component={Culturewomen}
											/>
											<Route
												exact
												path='/leisure/women'
												component={Leisurewomen}
											/>
											<Route path='/women' component={Women} />
											<Route path='/cart/overview' component={Cart} />
											<Route path='/users/signup' component={SignUp} />
											<Route path='/users/signin' component={SignIn} />
											<PrivateRoute
												exact
												path='/users/auth/dashboard'
												component={Dashboard}
												auth={context.auth}
											/>

											<PrivateRoute
												exact
												path='/cart/checkout'
												component={CheckOut}
												auth={context.auth}
											/>
										</CategoryMenuContextProvider>
									</SearchContextProvider>
								</OrderContextProvider>
							</UserContextProvider>
						</CartContextProvider>
					</ProductsContextProvider>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
