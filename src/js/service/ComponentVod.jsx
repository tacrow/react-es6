import React from 'react'

import Head from '../components/Head'

export default class ComponenVod extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		let titleHead = '動画配信サービス比較情報.com';
		return(
			<div>
				<Head title={titleHead} />
			</div>
		);
	}
}