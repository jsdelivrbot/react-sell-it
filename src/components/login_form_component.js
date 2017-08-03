import React, { Component } from 'react';

class LoginForm extends Component {
	constructor(props) {
		super(props);

		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onFormSubmit() {

	}

	render() {
		return(
			<form onSubmit={this.onFormSubmit} className="login-form">
				<input type="email" name="email" placeholder="Email"/>
				<input type="password" name="pass" placeholder="Password"/>

				<button type="submit" className="form-btn btn-stretched submit-btn">login</button>
			</form>
		)
	}
}

export default LoginForm;