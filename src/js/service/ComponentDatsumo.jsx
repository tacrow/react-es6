import React from 'react'

import Head from '../components/Head'
import GraphLine from '../components/GraphLine'
import GraphPie from '../components/GraphPie'

export default class ComponentDatsumo extends React.Component {
	render() {
		const titleHead = '脱毛口コミランキングナビ';
		const param = 'datsumo';
		return(
			<div>
				<Head title={titleHead} />
				<div className='u-cf'>
					<GraphLine param={param} />
					<GraphPie param={param} />
				</div>
			</div>
		);
	}
}