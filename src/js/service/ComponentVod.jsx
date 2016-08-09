import React from 'react'

import Head from '../components/Head'
import GraphLine from '../components/GraphLine'
import GraphPie from '../components/GraphPie'

export default class ComponenVod extends React.Component {
	render() {
		const titleHead = '動画配信サービス 比較情報.com';
		return(
			<div>
				<Head title={titleHead} />
				<div id='u-cf'>
					<GraphLine />
					<GraphPie />
				</div>
			</div>
		);
	}
}