import React from 'react'

import Head from '../components/Head'

export default class ComponentFx extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		let titleHead = '外為FX徹底比較.com';
		return(
			<div>
				<Head title={titleHead} />
			</div>
		);
	}
}