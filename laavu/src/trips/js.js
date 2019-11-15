import React from 'react';
import './scss.scss';
import {Container} from "react-bootstrap";

class Trips extends React.Component {

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
				<h2>Trips view</h2>
			</Container>
		);
	}
}

export default Trips;