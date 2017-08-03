import React, { Component } from 'react';
import Sidebar from './sidebar_component';
import LeftSide from './left_side_login_page_component';

export default class App extends Component {
  render() {
    return (
      <div className="row wrapper">
				<LeftSide />
				<Sidebar />
			</div>
    );
  }
}
