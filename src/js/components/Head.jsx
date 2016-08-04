import React from 'react'

export default class Head extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return　(
			<h2 className='c-head--sarvice'>{this.props.title}</h2>
		);
	}
}