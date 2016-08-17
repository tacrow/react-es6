import React from 'react'

import Navigation from './Navigation'

export default class SideContents extends React.Component {
	constructor() {
		super();
		this.state = {
			height: '',
			isActive: false
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
		let defHeight = 1082;
		let windowHeight = $(window).height();
		let windowWidth = $(window).width();
		let contentHeight = windowHeight - 100;
		if(windowWidth > 640) {
			if(defHeight > contentHeight) {
				this.setState({ height: defHeight });
			} else {
				this.setState({ height: contentHeight });
			}
		} else {
			this.setState({ height: windowHeight - 40 });
		}
	}
	handleClick() {
		this.setState({
			isActive: !this.state.isActive
		});
	}
	render() {
		return (
			<div id='l-contents__side' className={this.state.isActive ? 'is-active' : ''} onClick={this.handleClick.bind(this)} style={{height: + this.state.height + 'px'}}>
				<Navigation />
				<div className='p-toggle-side-nav' onClick={this.handleClick.bind(this)}>
					{this.state.isActive ? 'CLOSE' : 'OPEN'}
				</div>
			</div>
		);
	}
}