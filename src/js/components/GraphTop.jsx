import React from 'react'
import {Link} from 'react-router'
import {Line} from 'react-chartjs'

export default class GraphTop extends React.Component {
	constructor() {
		super();
		this.state = {
			data: []
		};
	}
	componentDidMount() {
		$.ajax({
			url: '/src/data/test.json',
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
			<GraphTopList
				data={this.state.data}
			/>
		);
	}
}

class GraphTopList extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<ul className='p-graph-list'>
			{this.props.data.map(data => (
				<GraphTopItem
					key={data.id}
					type={data.type}
					label={data.label}
					labels={data.labels}
					data={data.data}
					fillColor={data.fillColor}
					strokeColor={data.strokeColor}
					pointColor={data.pointColor}
				/>
			))}
			</ul>
		);
	}
}

class GraphTopItem extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		let type = this.props.type;
		let label = this.props.label;
		let dataChart = {
			labels: this.props.labels,
			datasets: [
				{
					label: this.props.label,
					fillColor: this.props.fillColor,
					strokeColor: 'rgba(160,160,160,1)',
					pointColor: this.props.pointColor,
					pointStrokeColor: '#fff',
					pointHighlightFill: '#fff',
					pointHighlightStroke: 'rgba(220,220,220,1)',
					data: this.props.data,
				}
			]
		};
		return (
			<li className='p-graph-list__item'>
				<h3 className={'c-head-graph c-head-graph--' + type}>{label}</h3>
				<Line data={dataChart} width='300' height='150' />
			</li>
		);
	}
}