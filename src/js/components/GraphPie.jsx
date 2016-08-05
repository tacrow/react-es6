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
			<GraphPieSend
				data={this.state.data}
			/>
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
					labels={data.labels}
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
		let label = this.props.label;
		let dataChart = this.props.data;
		let pieOption = {
			segmentStrokeColor : "#ffffff",
			segmentStrokeWidth : 2,
			animation : true,
			animationSteps : 50,
			animationEasing : "linear"
		};
		return (
			<div className='u-fill'>
				<h3>{label}</h3>
				<Pie data={dataChart} options={pieOption} width='450' height='250' />
			</div>
		);
	}
}