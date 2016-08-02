import React from 'react'
import {Link} from 'react-router'

export default class Header extends React.Component {
	render() {
		return (
			<header id='l-header'>
				<h1 className='l-header__logo'>
					<Link to='/'>React-ES6</Link>
				</h1>
			</header>
		);
	}
}