import React from 'react'
import {Link} from 'react-router'

const NavigationItems = [
	{
		label: '即日融資安心カードローン',
		route: 'cardloan',
		api: 'cardloan'
	},
	{
		label: 'クレジットカード人気比較',
		route: 'creditcard',
		api: 'creditcard'
	},
	{
		label: '外為FX徹底比較.com',
		route: 'fx',
		api: 'fx'
	},
	{
		label: '脱毛口コミランキングナビ',
		route: 'datsumo',
		api: 'datsumo'
	},
	{
		label: '電気比較情報.com',
		route: 'denki',
		api: 'denki'
	},
	{
		label: '動画配信サービス比較情報.com',
		route: 'vod',
		api: 'vod'
	},
	{
		label: '格安SIM比較情報.com',
		route: 'sim',
		api: 'sim'
	},
];

export default class Navigation extends React.Component {
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
		{/*
		$.ajax({

		});
		*/}
	}
	render() {
		return (
			<ul className='c-list p-navigation'>
			{NavigationItems.map((type, index) =>
				<li className='c-list__item p-navigation__item' key={index} data-graph-api={type.api} onClick={this.handleClick}>
					<Link to={type.route}>
						{type.label}
					</Link>
				</li>
			)}
			</ul>
		);
	}
}