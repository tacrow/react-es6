import React from 'react'
import Navigation from './Navigation'

import NavigationHead from './NavigationHead'

export default class SideContents extends React.Component {
	render() {
		return (
			<div id='l-contents__side'>
				<NavigationHead />
				<Navigation />
			</div>
		);
	}
}