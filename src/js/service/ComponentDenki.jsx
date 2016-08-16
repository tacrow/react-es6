import React from 'react'

import Head from '../components/Head'
import GraphLine from '../components/GraphLine'
import GraphPie from '../components/GraphPie'

export default class ComponentDenki extends React.Component {
	render() {
		const titleHead = '電力 比較情報.com';
		const param = 'denki';
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