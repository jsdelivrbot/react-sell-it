import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {logInUser} from '../actions/index';
import TextInput from '../components/common/text_input_component';

class LoginForm extends Component {
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
		console.log('cred', this.state.credentials);
		this.props.logInUser(this.state.credentials);
	}

	render() {
		return(
			<form onSubmit={this.onFormSubmit} className="login-form">
				<TextInput
					type="email"
					value={this.state.credentials.email}
					name="email"
					placeholder="Email"
					onChange={this.onInputChange}/>
				<TextInput
					type="password"
					value={this.state.credentials.password}
					name="password"
					placeholder="Password"
					onChange={this.onInputChange}/>

				<button type="submit" className="form-btn btn-stretched submit-btn">login</button>
			</form>
		)
	}
}

function mapDispatchToProps( dispatch ) {
	return bindActionCreators({logInUser}, dispatch);
}

export default connect(null, mapDispatchToProps)(LoginForm);