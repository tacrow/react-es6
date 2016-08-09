import React from 'react'

import Head from '../components/Head'
import GraphLine from '../components/GraphLine'
import GraphPie from '../components/GraphPie'

export default class ComponentFx extends React.Component {
	render() {
		const titleHead = '外為FX徹底比較.com';
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