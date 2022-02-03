import React, { Component } from 'react';
import Education from './Education';
import GeneralInfo from './GeneralInfo';
import Jobs from './Jobs';

export default class Form extends Component {
	render() {
		//const { handleChange } = this.props.handleChange();
		return (
			<form className="form">
				<GeneralInfo
					handleChange={this.props.handleChange}
					form={this.props.form}
					handleImage={this.props.handleImage}
				/>
				<Education
					handleChangeArr={this.props.handleChangeArr}
					handleSubmitArr={this.props.handleSubmitArr}
					form={this.props.education}
					isEditing={this.props.isEditing}
				/>
				<Jobs
					handleChangeArr={this.props.handleChangeArr}
					handleSubmitArr={this.props.handleSubmitArr}
					form={this.props.jobs}
					isEditing={this.props.isEditing}
				/>
			</form>
		);
	}
}
