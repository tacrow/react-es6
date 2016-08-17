import React from 'react'

import Head from '../components/Head'
import GraphLine from '../components/GraphLine'
import GraphPie from '../components/GraphPie'

export default class ComponentCardloan extends React.Component {
	render() {
		const titleHead = '即日融資安心カードローン';
		const param = 'cardloan';
		return(
			<div>
				<Head title={titleHead} />
				<div className='u-cf'>
					<GraphLine param = {param} />
					<GraphPie param = {param} />
				</div>
			</div>
		);
	}
}