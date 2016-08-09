import React from 'react'

import Head from '../components/Head'
import GraphLine from '../components/GraphLine'
import GraphPie from '../components/GraphPie'

export default class ComponentCreditcard extends React.Component {
	render() {
		const titleHead = 'クレジットカード人気比較';
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