import React from 'react'

import Head from '../components/Head'

export default class ComponentCardloan extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		let titleHead = '即日融資安心カードローン';
		return(
			<div>
				<Head title={titleHead} />
			</div>
		);
	}
}