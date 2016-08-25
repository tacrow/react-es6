import React from 'react'

import FormSelectDate from '../components/FormSelectDate'
import Head from '../components/Head'
import GraphLine from '../components/GraphLine'
import GraphPie from '../components/GraphPie'

export default class ComponentFxHikaku extends React.Component {
	render() {
		const titleHead = 'FX・外国為替 比較情報.com';
		const param = 'fxhikaku';
		return(
			<div>
				<FormSelectDate />
				<Head title={titleHead} />
				<div className='u-cf'>
					<GraphLine param={param} />
					<GraphPie param={param} />
				</div>
			</div>
		);
	}
}