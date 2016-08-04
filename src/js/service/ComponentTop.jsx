import React from 'react'

import Head from '../components/Head'
import GraphTop from '../components/GraphTop'

export default class ComponentTop extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		let titleHead = 'TOP';
		return (
			<div>
				<Head title={titleHead} />
				<GraphTop />
			</div>
		);
	}
}