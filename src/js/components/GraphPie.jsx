import React from 'react'
import {Link} from 'react-router'
import {Core,Pie} from 'react-chartjs'

export default class GraphPie extends React.Component {
	constructor() {
		super();
		this.state = {
			data: []
		};
	}
	componentDidMount() {
		$.ajax({
			url: '/src/data/pie.json',
			type: 'GET',
			dataType: 'json',
			cache: false,
		}).done(function(data){
			this.setState({
				data: data
			});
		}.bind(this)).fail(function(data){
			console.log('error');
		}.bind(this));
	}
	render() {
		return　(
			<GraphPieSend data={this.state.data} />
		);
	}
}

class GraphPieSend extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className='l-graph__item'>
			{this.props.data.map(data => (
				<GraphPieChart
					key={data.id}
					label={data.label}
					date={data.date}
					data={data.data}
				/>
			))}
			</div>
		);
	}
}

class GraphPieChart extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		const label = this.props.label;
		const date = this.props.date;
		const dataChart = this.props.data;
		const pieOption = {
			segmentStrokeColor : "#ffffff",
			segmentStrokeWidth : 2,
			animation : true,
			animationSteps : 50,
			animationEasing : "linear"
		};
		return (
			<div className='p-graph-pie'>
				<h3 className='c-head-service-graph'>{label}</h3>
				<span className='p-graph-date'>Date : {date}</span>
				<Pie data={dataChart} options={pieOption} width='350' height='250' />
				<ul className='p-graph-pie__labels'>
					<li><span></span>Loading</li>
					<li><span></span>Scripting</li>
					<li><span></span>Rendering</li>
					<li><span></span>Painting</li>
					<li><span></span>Other</li>
				</ul>
			</div>
		);
	}
}
