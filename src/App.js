import React, {Component} from 'react';
import './App.css';
import history from "./history"
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Assets/SCSS/core/variables/_components-variables.scss"

import {
	Router,
	Route,
	Switch,
} from "react-router-dom"

import Dashboard from "./Pages/Dashboard/Dashboard"
import Login from "./Pages/Login"
import Memes from "./Pages/Memes"
import HomePage from "./Pages/Home/HomePage";


import storeInstance from './Store'

export const StoreContext = React.createContext(null);


class App extends Component {
	render() {
		return (
			<StoreContext.Provider value={storeInstance}>
				<Router history={history}>
					<ToastContainer/>

					<Switch>
						<Route exact path={"/"} component={HomePage}/>
						<Route exact path={"/login"} component={Login}/>
						<Route exact path={"/Dashboard"} component={Dashboard}/>
						<Route exact path={"/Memes"} component={Memes}/>
					</Switch>
				</Router>
			</StoreContext.Provider>
		);
	}
}

export default App;
