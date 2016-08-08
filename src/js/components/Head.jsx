import React from 'react'

export default class Head extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return　(
			<h2 className='c-head--service'>{this.props.title}</h2>
		);
	}
}