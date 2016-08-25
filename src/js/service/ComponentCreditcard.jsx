import React from 'react'

import FormSelectDate from '../components/FormSelectDate'
import Head from '../components/Head'
import GraphLine from '../components/GraphLine'
import GraphPie from '../components/GraphPie'

export default class ComponentCreditcard extends React.Component {
	render() {
		const titleHead = 'クレジットカード人気比較';
		const param = 'creditcard';
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