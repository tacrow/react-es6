import React from 'react'
import {Link} from 'react-router'
import {Line} from 'react-chartjs'

export default class GraphTop extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: []
		};
	}
	componentDidMount() {
		$.ajax({
			url: '/src/data/test.json?date=' + this.props.dateParam,
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
GraphTop.propTypes = {
	dateParam: React.PropTypes.string.isRequired
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
					date={data.date}
					labels={data.labels}
					data={data.data}
					fillColor={data.fillColor}
					strokeColor={data.strokeColor}
					pointColor={data.pointColor}
					data_ideal={data.data_ideal}
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
		const type = this.props.type;
		const label = this.props.label;
		const date = this.props.date;
		const dataChart = {
			labels: this.props.labels,
			datasets: [
				{
					label: this.props.label,
					fillColor: this.props.fillColor,
					strokeColor: 'rgba(160,160,160,1)',
					pointColor: this.props.pointColor,
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
			<li className='p-graph-list__item'>
				<h3 className={'c-head-graph c-head-graph--' + type}>{label}</h3>
				<span className='p-graph-date'>Date : {date}</span>
				<div className='p-graph-list__item__body'>
					<Line data={dataChart} />
				</div>
			</li>
		);
	}
}