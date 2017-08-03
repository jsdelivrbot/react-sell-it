import React, { Component } from 'react';

class SignUpForm extends Component {
	constructor(props) {
		super(props);

		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onFormSubmit() {
		return;
	}

	render() {
		return(
			<div>
				<form onSubmit={this.onFormSubmit} className="login-form">
					<input type="email" name="email" placeholder="Email"/>
					<input type="text" name="name" placeholder="Name"/>
					<input type="password" name="pass" placeholder="Password"/>
					<input type="password" name="pass-confirm" placeholder="Confirm Password"/>

					<button type="submit" className="form-btn btn-stretched submit-btn">login</button>
				</form>
			</div>
		)
	}
}

export default SignUpForm;