import React from 'react'
import {Link} from 'react-router'

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
			console.error(this.props.url, status, err.toString());
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
			<ul className='graphList u-cf'>
			{this.props.data.map(data => (
				<GraphTopItem
					key={data.id}
					head = {data.autor}
					comment = {data.comment}
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
		return (
			<li>
				<h3>{this.props.head}</h3>
				<p>{this.props.comment}</p>
			</li>
		);
	}
}