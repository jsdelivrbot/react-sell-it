import React, { Component } from 'react';
import LoginForm from './login_form_component';
import SignUpForm from './sign_up_form_component';
import SignUpButtons from "./signup_buttons_component";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class Sidebar extends Component {
	render() {
		return(
			<div className="col-md-4 login-sidebar">
				<header>
					<img src="../img/sell-it.png" alt="logo"/>
				</header>

				<BrowserRouter>
					<div>
						<SignUpButtons/>

						<Switch>
							<Route path="/sign-up" component={SignUpForm} />
							<Route path="/" component={LoginForm} />
						</Switch>
					</div>
				</BrowserRouter>
			</div>
		)
	}
}

export default Sidebar;