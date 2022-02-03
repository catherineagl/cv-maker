import React from 'react';

export default function Jobs(props) {
	return (
		<section className="form-section">
			<h2>Experiencia Laboral</h2>

			<div className="form-item">
				<label htmlFor="company">Nombre de la Empresa:</label>
				<input
					type="text"
					id="company"
					name="company"
					value={props.form.company || ''}
					onChange={props.handleChangeArr}
				></input>
			</div>
			<div className="form-item">
				<label htmlFor="companyPosition">Cargo:</label>
				<input
					type="text"
					id="companyPosition"
					name="companyPosition"
					value={props.form.companyPosition || ''}
					onChange={props.handleChangeArr}
				></input>
			</div>

			<div className="form-item">
				<label htmlFor="companyCity">Lugar:</label>
				<input
					type="text"
					id="companyCity"
					name="companyCity"
					value={props.form.companyCity || ''}
					onChange={props.handleChangeArr}
				></input>
			</div>

			<div className="form-item">
				<h3>Duración:</h3>
				<label htmlFor="workDateStart">Desde</label>
				<input
					type="date"
					id="workDateStart"
					name="workDateStart"
					value={props.form.workDateStart || ''}
					onChange={props.handleChangeArr}
				></input>

				<label htmlFor="workDateEnd">Hasta</label>
				<input
					type="date"
					id="workDateEnd"
					name="workDateEnd"
					value={props.form.workDateEnd || ''}
					onChange={props.handleChangeArr}
				></input>
			</div>

			<button className="btn" onClick={props.handleSubmitArr} name="jobs">
				Agregar
			</button>
		</section>
	);
}
