import React from 'react'

import Head from '../components/Head'

export default class ComponentDatsumo extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		let titleHead = '脱毛口コミランキングナビ';
		return(
			<div>
				<Head title={titleHead} />
			</div>
		);
	}
}