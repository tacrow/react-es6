import React from 'react'

export default class FormSelectDate extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			value: ''
		};
	}
	componentDidMount() {
		$.ajax({
			url: '/src/data/date.json',
			type: 'GET',
			dataType: 'json',
			cache: false,
		}).done(function(data){
			this.setState({
				data: data
			});
		}.bind(this)).fail(function(data){
			console.log('error');
		}.bind(this));
	}
	onChangeSelectValue(e) {
		const param = e.target.value;
		this.state.value = param;
		this.props.dateParam(param);
		this.forceUpdate();

		console.log('change');
		console.log('value = ' + this.state.value);
	}
	render() {
		const options = this.state.data.map((data, key) => (
			<option key={key} value={data.value}>{data.label}</option>
		));
		return (
			<form className='c-form'>
				<p>時間帯変更</p>
				<div className='c-wrap-select'>
					<select className='c-select' onChange={this.onChangeSelectValue.bind(this)} value={this.state.value}>
						{options}
					</select>
				</div>
			</form>
		);
	}
}
FormSelectDate.propTypes = {
	dateParam: React.PropTypes.number
}
