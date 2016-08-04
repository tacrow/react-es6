import React from 'react'

import Head from '../components/Head'

export default class ComponentDenki extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		let titleHead = '電力比較情報.com';
		return(
			<div>
				<Head title={titleHead} />
			</div>
		);
	}
}