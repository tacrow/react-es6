import React from 'react'

import Head from '../components/Head'

export default class ComponentSim extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		let titleHead = '格安SIM比較情報.com';
		return(
			<div>
				<Head title={titleHead} />
			</div>
		);
	}
}