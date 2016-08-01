'use strict';

import React from 'react';
import {render} from 'react-dom';

// Main Layout
class Header extends React.Component {
	render() {
		return (
			<header id="l-header">
				<h1 className="l-header__logo">React-ES6</h1>
			</header>
		);
	}
}

class Footer extends React.Component {
	render() {
		return (
			<footer id="l-footer">
				<p className="l-footer__copyright">Copyright © React-ES6 All Rights Reserved.</p>
			</footer>
		);
	}
}

class SideContents extends React.Component {
	render() {
		return (
			<div id="l-contents__side">
				<Navigation />
			</div>
		);
	}
}
class MainContents extends React.Component {
	render() {
		return (
			<div id="l-contents__main">
				<div className="l-main__wrapper">Main</div>
			</div>
		);
	}
}

// Detail

/*
 * Navigation
 */
const NAVIGATION_ITEMS = [
	{label: '即日融資安心カードローン'},
	{label: 'クレジットカード人気比較'},
	{label: '外為FX徹底比較.com'},
	{label: '脱毛口コミランキングナビ'},
	{label: '電気比較情報.com'},
	{label: '動画配信サービス比較情報.com'},
	{label: '格安SIM比較情報.com'},
];

class Navigation extends React.Component {
	render() {
		return　(
			<nav>
				<NavigationItem />
			</nav>
		);
	}
}

const NavigationItem = (props) => {
	return (
		<ul className="c-list p-navigation">
		{NAVIGATION_ITEMS.map((type) =>
			<NavigationLavel
				label = { type.label }
			/>
		)}
		</ul>
	);
}

class NavigationLavel extends React.Component {
	render() {
		return (
			<li className="c-list__item p-navigation__item c-link">
				{this.props.label}
			</li>
		);
	}
}



class ReactComponent extends React.Component {
	constructor() {
		super();
		this.state = {
			height: ''
		};
	}
	componentDidMount() {
		window.addEventListener('load', this.windowResize.bind(this));
		window.addEventListener('resize', this.windowResize.bind(this));
	}
	componentWillUnmount() {
		window.removeEventListener('load', this.windowResize.bind(this));
		window.removeEventListener('resize', this.windowResize.bind(this));
	}
	windowResize() {
		const windowHeight = $(window).height();
		const contentHeight = windowHeight - 100;
		this.setState({height: contentHeight});
	}
	render() {
		return (
			<div>
				<Header />
				<div id="l-contents" style={{height: + this.state.height + 'px'}}>
					<SideContents />
					<MainContents />
				</div>
				<Footer />
			</div>
		);
	}
}


render(
	<ReactComponent/>,
	document.getElementById('react-contents')
);