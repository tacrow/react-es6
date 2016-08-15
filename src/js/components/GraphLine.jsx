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
					date={data.date}
					labels={data.labels}
					data={data.data}
					data_ideal={data.data_ideal}
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
		const label = this.props.label;
		const date = this.props.date;
		const dataChart = {
			labels: this.props.labels,
			datasets: [
				{
					label: this.props.label,
					fillColor: "rgba(97,218,251,.3)",
					strokeColor: 'rgba(160,160,160,1)',
					pointColor: "rgba(97,218,251,1)",
					pointHighlightFill: '#ffffff',
					data: this.props.data,
				},
				{
					label: this.props.label,
					fillColor: "rgba(160,160,160,.2)",
					strokeColor: 'rgba(160,160,160,1)',
					pointColor: "rgba(200,200,200,1)",
					pointHighlightFill: '#ffffff',
					data: this.props.data_ideal,
				}
			]
		};
		return (
			<div className='u-fill'>
				<h3 className='c-head-service-graph'>{label}</h3>
				<span className='p-graph-date'>Date : {date}</span>
				<Line data={dataChart} />
			</div>
		);
	}
}