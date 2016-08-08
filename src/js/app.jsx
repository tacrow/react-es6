'use strict';

import React from 'react'
import {render} from 'react-dom'
import {Router, Route, Link, IndexRoute, hashHistory} from 'react-router'

import Header from './components/Header'
import Footer from './components/Footer'
import SideContents from './components/SideContents'

import ComponentTop from './service/ComponentTop'
import ComponentCardloan from './service/ComponentCardloan'
import ComponentCreditcard from './service/ComponentCreditcard'
import ComponentFx from './service/ComponentFx'
import ComponentDatsumo from './service/ComponentDatsumo'
import ComponentDenki from './service/ComponentDenki'
import ComponentVod from './service/ComponentVod'
import ComponentSim from './service/ComponentSim'

class App extends React.Component {
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
		let defHeight = 760;
		let windowHeight = $(window).height();
		let contentHeight = windowHeight - 100;
		if(defHeight > contentHeight) {
			this.setState({ height: defHeight });
		} else {
			this.setState({ height: contentHeight });
		}
	}
	render() {
		return (
			<div>
				<Header />
				<div id='l-contents' style={{height: + this.state.height + 'px'}}>
					<SideContents />
					<div id='l-contents__main'>
						{this.props.children}
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

let routes = (
	<Route path='/' component={App}>
		<IndexRoute component={ComponentTop} />
		<Route path='cardloan' component={ComponentCardloan} />
		<Route path='creditcard' component={ComponentCreditcard} />
		<Route path='fx' component={ComponentFx} />
		<Route path='datsumo' component={ComponentDatsumo} />
		<Route path='denki' component={ComponentDenki} />
		<Route path='vod' component={ComponentVod} />
		<Route path='sim' component={ComponentSim} />
	</Route>
);

render((
	<Router history={hashHistory}>{routes}</Router>
), document.getElementById('react-contents'))
