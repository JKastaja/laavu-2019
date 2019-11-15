import React from 'react';
import './scss.scss';
import {Container} from "react-bootstrap";

class Profile extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		};
	}

	componentDidMount() {
	}

	render() {
		return (
			<Container>
				<h2>Profile view</h2>
			</Container>
		);
	}
}

export default Profile;