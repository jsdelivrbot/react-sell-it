import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import _ from 'lodash';

import {logInUser} from '../../actions/index';
import TextInput from '../../components/common/text_input_component';

class LoginForm extends Component {
	constructor(props) {
		super(props);

		this.state = {credentials: {email: '', password: ''}, errors: []};
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	componentWillUnmount() {
		// debugger;
		// this.props.errorMessage = {};
	}

	onInputChange(event) {
		const field = event.target.name;
		const credentials = this.state.credentials;
		credentials[field] = event.target.value;

		return this.setState({credentials: credentials});
	}

	renderAlert() {
		if(this.props.errorMessage) {
			console.log('this.props', this.props);

			let message = this.props.errorMessage;

			return message.non_field_errors.map((error, index) => {
				return(
					<p key={index} className="text-danger"><strong>Error!</strong> { error }</p>
				);
			});
		}
	}

	onFormSubmit(event) {
		event.preventDefault();
		console.log('cred', this.state.credentials);
		this.props.logInUser(this.state.credentials, () => {
			this.props.history.push('/dashboard');
		});
	}

	render() {
		return(
			<form onSubmit={this.onFormSubmit} className="login-form">
				{ this.renderAlert() }
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

function mapStateToProps(state) {
	return {
		errorMessage: state.auth.error,
		message: state.auth.message
	};
}

function mapDispatchToProps( dispatch ) {
	return bindActionCreators({logInUser}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);