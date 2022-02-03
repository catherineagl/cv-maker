import React from 'react';
import Education from './Education';
import GeneralInfo from './GeneralInfo';
import Jobs from './Jobs';

export default function Form(props) {
	return (
		<form className="form">
			<GeneralInfo
				handleChange={props.handleChange}
				form={props.form}
				handleImage={props.handleImage}
			/>
			<Education
				handleChangeArr={props.handleChangeArr}
				handleSubmitArr={props.handleSubmitArr}
				form={props.education}
				isEditing={props.isEditing}
			/>
			<Jobs
				handleChangeArr={props.handleChangeArr}
				handleSubmitArr={props.handleSubmitArr}
				form={props.jobs}
				isEditing={props.isEditing}
			/>
		</form>
	);
}
