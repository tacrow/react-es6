import React from 'react'

import FormSelectDate from '../components/FormSelectDate'
import Head from '../components/Head'
import GraphTop from '../components/GraphTop'

export default class ComponentTop extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			dateParam: ''
		};
	}
	handleDateParam() {
		const param = this.state.dateParam;
		param.push({dateParam: dateParam});
		this.setState({
			dateParam: param
		});
	}
	render() {
		const titleHead = 'TOP';
		return (
			<div>
				<FormSelectDate />
				<Head title={titleHead} />
				<GraphTop dateParam={this._handleDateParam} />
			</div>
		);
	}
}
