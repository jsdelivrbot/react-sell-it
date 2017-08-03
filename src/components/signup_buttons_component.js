import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignUpButtons extends Component {
	render() {
		return(
			<div className="sign-buttons">
				<Link to="/" className="form-btn sign-in-btn">sign in</Link>
				<Link to="/sign-up" className="form-btn sign-up-btn">sign up</Link>
			</div>
		)
	}
}

export default SignUpButtons;