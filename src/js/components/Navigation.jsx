import React from 'react'
import {Link} from 'react-router'

const NavigationItems = [
	{
		id: null,
		label: 'TOP',
		route: '/',
		api: '/'
	},
	{
		id: 1,
		label: '即日融資安心カードローン',
		route: 'cardloan',
		api: 'cardloan'
	},
	{
		id: 2,
		label: 'クレジットカード人気比較',
		route: 'creditcard',
		api: 'creditcard'
	},
	{
		id: 3,
		label: '外為FX徹底比較.com',
		route: 'fx',
		api: 'fx'
	},
	{
		id: 4,
		label: '脱毛口コミランキングナビ',
		route: 'datsumo',
		api: 'datsumo'
	},
	{
		id: 5,
		label: '電気比較情報.com',
		route: 'denki',
		api: 'denki'
	},
	{
		id: 6,
		label: '動画配信サービス比較情報.com',
		route: 'vod',
		api: 'vod'
	},
	{
		id: 7,
		label: '格安SIM比較情報.com',
		route: 'sim',
		api: 'sim'
	}
];

export default class Navigation extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			NavigationItems: NavigationItems,
			activeList: ''
		};
	}
	changeNavList(type) {
		this.setState({
			activeList: type.id
		});
	}
	render() {
		return　(
			<nav>
				<NavigationList
					activeList={this.state.activeList}
					NavigationItems={this.state.NavigationItems}
					changeNavList={this.changeNavList.bind(this)}
				/>
			</nav>
		);
	}
}

class NavigationList extends React.Component {
	constructor(props) {
		super(props);
	}
	handleClick(type) {
		this.props.changeNavList(type);
	}
	render() {
		return (
			<ul className='c-list p-navigation'>
			{this.props.NavigationItems.map(type => (
				<NavigationItem
					key={type.id}
					data-graph-api={type.api}
					label={type.label}
					route={type.route}
					handleClick={this.handleClick.bind(this, type)}
					isActive={this.props.activeList === type.id}
				/>
			))}
			</ul>
		);
	}
}

class NavigationItem extends React.Component {
	constructor(props) {
		super(props);
	}
	handleClick() {
		this.props.handleClick();
	}
	render() {
		let def = 'c-list p-navigation__item';
		let active = 'c-list p-navigation__item is-active';
		return (
			<li className={this.props.isActive ? active : def} data-graph-api={this.props.api} onClick={this.handleClick.bind(this)}>
				<Link to={this.props.route}>
					{this.props.label}
				</Link>
			</li>
		);
	}
}