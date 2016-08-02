'use strict';

import React from 'react'
import {render} from 'react-dom'

// import Classname from 'classname'
import { Router, Route, DefaultRoute, Link, IndexLink, RouteHandler, browserHistory } from 'react-router'

import ComponentCardloan from './service/ComponentCardloan'
import ComponentCreditcard from './service/ComponentCreditcard'
import ComponentFx from './service/ComponentFx'
import ComponentDatsumo from './service/ComponentDatsumo'
import ComponentDenki from './service/ComponentDenki'
import ComponentVod from './service/ComponentVod'
import ComponentSim from './service/ComponentSim'

// Main Layout
class Header extends React.Component {
	render() {
		return (
			<header id='l-header'>
				<h1 className='l-header__logo'>React-ES6</h1>
			</header>
		);
	}
}

class Footer extends React.Component {
	render() {
		return (
			<footer id='l-footer'>
				<p className='l-footer__copyright'>Copyright © React-ES6 All Rights Reserved.</p>
			</footer>
		);
	}
}

class SideContents extends React.Component {
	render() {
		return (
			<div id='l-contents__side'>
				<Navigation />
			</div>
		);
	}
}
class MainContents extends React.Component {
	render() {
		return (
			<div id='l-contents__main'>
				<div className='l-main__wrapper'>Main</div>
			</div>
		);
	}
}

// Detail

/*
 * Navigation
 */
const NavigationItems = [
	{
		label: '即日融資安心カードローン',
		rout: 'cardloan',
		api: 'cardloan'
	},
	{
		label: 'クレジットカード人気比較',
		rout: 'creditcard',
		api: 'creditcard'
	},
	{
		label: '外為FX徹底比較.com',
		rout: 'fx',
		api: 'fx'
	},
	{
		label: '脱毛口コミランキングナビ',
		rout: 'datsumo',
		api: 'datsumo'
	},
	{
		label: '電気比較情報.com',
		rout: 'denki',
		api: 'denki'
	},
	{
		label: '動画配信サービス比較情報.com',
		rout: 'vod',
		api: 'vod'
	},
	{
		label: '格安SIM比較情報.com',
		rout: 'sim',
		api: 'sim'
	},
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

class NavigationItem extends React.Component {
	handleClick(key) {
		var $elem = $(key.target);
		var target = $elem.attr('data-graph-api');
		var baseUrl = 'api/';
		// $.ajax({

		// });
	}
	render() {
		return (
			<ul className='c-list p-navigation'>
			{NavigationItems.map((type, index) =>
				<li className='c-list__item p-navigation__item' key={index} data-graph-api={type.api} onClick={this.handleClick}>
					<Link to={type.rout}>
						{type.label}
					</Link>
				</li>
			)}
			</ul>
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
				<div id='l-contents' style={{height: + this.state.height + 'px'}}>
					<SideContents />
					<MainContents />
				</div>
				<Footer />
			</div>
		);
	}
}

// render(
// 	<ReactComponent />,
// 	document.getElementById('react-contents')
// );

render((
	<Router history={browserHistory}>
		<Route path='' handler={ReactComponent}>
			<Route name='cardloan' handler={ComponentCardloan} />
			<Route name='creditcard' handler={ComponentCreditcard} />
			<Route name='fx' handler={ComponentFx} />
			<Route name='datsumo' handler={ComponentDatsumo} />
			<Route name='denki' handler={ComponentDenki} />
			<Route name='vod' handler={ComponentVod} />
			<Route name='sim' handler={ComponentSim} />
		</Route>
	</Router>
), document.getElementById('react-contents'))
