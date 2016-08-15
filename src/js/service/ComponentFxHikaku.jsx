import React from 'react'

import Head from '../components/Head'
import GraphLine from '../components/GraphLine'
import GraphPie from '../components/GraphPie'

export default class ComponentFxHikaku extends React.Component {
	render() {
		const titleHead = 'FX・外国為替 比較情報.com';
		return(
			<div>
				<Head title={titleHead} />
				<div className='u-cf'>
					<GraphLine />
					<GraphPie />
				</div>
			</div>
		);
	}
}