import React from 'react';
import './scss.scss';
// Components
import HorizontalScroll from 'react-scroll-horizontal'
import {withRouter} from "react-router-dom";
import {Container, Row, Col, Card, Jumbotron, Button, Carousel} from 'react-bootstrap'

import content from '../content'

class Overview extends React.Component {

	constructor(props) {
		super(props);
		this.state = {};
		this.routeChange = this.routeChange.bind(this);
	}

	routeChange(path) {
		this.props.history.push(path);
	}

	componentDidMount() {}

	render() {
		return (
			<Container>
				<header>
					<div className="logo-laavu">
						<div className="icon"></div>
						<div className="text">Laavu</div>
					</div>
				</header>
				<Carousel>
					{
						content.carousel.map((item, idx) => {
							return (
								<Carousel.Item key={idx}>
									<img
										className="d-block w-100"
										src={item.image}
										alt={item.name}
									/>
									<Carousel.Caption>
										<h3>{item.name}</h3>
										<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
									</Carousel.Caption>
								</Carousel.Item>
							)
						})
					}
				</Carousel>
				<Jumbotron>
					<h2>Laavu</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consectetur doloribus fugit id illum
						labore libero nihil quasi quidem quo, reprehenderit repudiandae! Aliquam hic molestiae molestias odit
						omnis possimus quae.
					</p>
					<p>
						<Button variant='primary'>Lorem ipsum</Button>
					</p>
				</Jumbotron>
				<Row>
					<Col>
						<h3>Starting points for your adventure</h3>
						<HorizontalScroll
							pageLock={true}
							reverseScroll={false}
							className='horisontal-scroll'
						>
							{
								content.locations.map((item, idx) => {
									return (
										<Card className='horisontal-scroll-card' key={idx} onClick={ () => this.routeChange(`/location:${item.id}`)}>
											<Card.Img variant="top" src={item.image}/>
											<Card.Body>
												<Card.Title>{item.name}</Card.Title>
												<Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
												<Card.Text>
													Some quick example text to build on the card title and make up the bulk of
													the card's content.
												</Card.Text>
											</Card.Body>
										</Card>
									)
								})
							}
						</HorizontalScroll>
					</Col>
				</Row>
				<Row>
					<Col>
						<h3>Experiences</h3>
						<HorizontalScroll
							pageLock={true}
							reverseScroll={false}
							className='horisontal-scroll'
						>
							{
								content.experiences.map((item, idx) => {
									return (
										<Card className='horisontal-scroll-card' key={idx} onClick={ () => this.routeChange(`/experience:${item.id}`)}>
											<Card.Img variant="top" src={item.image}/>
											<Card.Body>
												<Card.Title>{item.name}</Card.Title>
												<Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
												<Card.Text>
													Some quick example text to build on the card title and make up the bulk of
													the card's content.
												</Card.Text>
											</Card.Body>
										</Card>
									)
								})
							}
						</HorizontalScroll>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default withRouter(Overview);