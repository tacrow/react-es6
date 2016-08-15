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
import ComponentCardloanHikaku from './service/ComponentCardloanHikaku'
import ComponentCreditcardHikaku from './service/ComponentCreditcardHikaku'
import ComponentFxHikaku from './service/ComponentFxHikaku'

class App extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<div id='l-contents' className='u-cf'>
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
		<Route path='cardloan-hikaku' component={ComponentCardloanHikaku} />
		<Route path='creditcard-hikaku' component={ComponentCreditcardHikaku} />
		<Route path='fx-hikaku' component={ComponentFxHikaku} />
	</Route>
);

render((
	<Router history={hashHistory}>{routes}</Router>
), document.getElementById('react-contents'))
