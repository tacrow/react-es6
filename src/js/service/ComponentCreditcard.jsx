import React from 'react'

import Head from '../components/Head'

export default class ComponentCreditcard extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		let titleHead = 'クレジットカード人気比較';
		return(
			<div>
				<Head title={titleHead} />
			</div>
		);
	}
}