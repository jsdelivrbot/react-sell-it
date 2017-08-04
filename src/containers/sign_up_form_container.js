import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {registerUser} from '../actions'
import TextInput from '../components/common/text_input_component';

class SignUpForm extends Component {
	constructor(props) {
		super(props);

		this.state = {credentials: {email: '', password: ''}};
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event) {
		const field = event.target.name;
		const credentials = this.state.credentials;
		credentials[field] = event.target.value;

		return this.setState({credentials: credentials});
	}

	onFormSubmit(event) {
		event.preventDefault();
		this.props.registerUser(this.state.credentials);
	}

	render() {
		return(
			<div>
				<form onSubmit={this.onFormSubmit} className="login-form">
					<TextInput
						type="email"
						value={this.state.credentials.email}
						name="email"
						placeholder="Email"
						onChange={this.onInputChange}/>
					<TextInput
						type="text"
						value={this.state.credentials.name}
						name="username"
						placeholder="Name"
						onChange={this.onInputChange}/>
					<TextInput
						type="password"
						value={this.state.credentials.password}
						name="password"
						placeholder="Password"
						onChange={this.onInputChange}/>
					<TextInput
						type="password"
						value={this.state.credentials.passwordConfirm}
						name="password_confirm"
						placeholder="Confirm Password"
						onChange={this.onInputChange}/>

					<button type="submit" className="form-btn btn-stretched submit-btn">login</button>
				</form>
			</div>
		)
	}
}

function mapDispatchToProps( dispatch ) {
	return bindActionCreators({registerUser}, dispatch);
}

export default connect(null, mapDispatchToProps)(SignUpForm);