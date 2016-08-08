import React from 'react'
import {Link} from 'react-router'
import {Line} from 'react-chartjs'

export default class GraphLine extends React.Component {
	constructor() {
		super();
		this.state = {
			data: []
		};
	}
	componentDidMount() {
		$.ajax({
			url: '/src/data/line.json',
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
			<GraphLineSend
				data={this.state.data}
			/>
		);
	}
}

class GraphLineSend extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className='l-graph__item'>
			{this.props.data.map(data => (
				<GraphLineChart
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

class GraphLineChart extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		let label = this.props.label;
		let dataChart = {
			labels: this.props.labels,
			datasets: [
				{
					fill: true,
					label: this.props.label,
					fillColor: "rgba(37,183,192,.3)",
					strokeColor: "rgba(220,220,220,1)",
					pointColor: "rgba(37,183,192,1)",
					data: this.props.data,
				}
			]
		};
		return (
			<div className='u-fill'>
				<h3 className='c-head-graph'>{label}</h3>
				<Line data={dataChart} width='450' height='250' />
			</div>
		);
	}
}