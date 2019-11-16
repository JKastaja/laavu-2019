import React from 'react';
import { withRouter } from "react-router";
import './scss.scss';
import content from '../content'
import {Container, Row, Col, Card} from 'react-bootstrap'
import GenericAreaChart from "../generic-area-chart/js";

class Location extends React.Component {
	constructor(props) {
		const id = props.match.params.id.replace(':', '');
		console.log("id", {id: id});
		console.log(content.locations);
		const item = content.locations.filter(item => item.id === id)[0];
		console.log('item', item);

		super(props);
		this.state = {
			item: item
		};
	}

	componentDidMount() {
		window.scrollTo(0, 0)
	}

	evaluateBlock(block) {
		switch(block.type) {
			case 'text':
				return <p>{block.content}</p>;
			case 'image':
				return <img src={block.content}/>;
			case 'html':
				return <div dangerouslySetInnerHTML={{ __html: block.content }}></div>;
			case 'stats_weekly':
				return <GenericAreaChart content={block.content} title="Visitors by weekday"></GenericAreaChart>;
			case 'stats_monthly':
				return <GenericAreaChart content={block.content} title="Visitors by month"></GenericAreaChart>;
			default:
				return null;
		}
	}

	render() {
		let blockContent = ``;

		return (
			<Container className="location-component">
				<div style={{backgroundImage: `url(${this.state.item.image})`}} className="hero">
					<h2>{this.state.item.name}</h2>
				</div>

				{
					this.state.item.content.map(
						block => {
							return this.evaluateBlock(block);
						}
					)
				}
			</Container>
		);
	}
}

export default withRouter(Location);