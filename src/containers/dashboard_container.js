import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Dashboard extends Component {
	constructor(props) {
		super(props);

		// this.props.protectedTest();
	}

	renderContent() {
		return (
			<p>
				<strong>You are successfully logged in!</strong>
			</p>
		);
	}

	render() {
		return (
			<div className="dashboard-wrapper">
				{this.renderContent()}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		content: state.auth.content
	};
}

export default connect(mapStateToProps, actions)(Dashboard);