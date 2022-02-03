import React from 'react';

export default function Education(props) {
	return (
		<section className="form-section">
			<h2>Educación</h2>

			<div className="form-item">
				<label htmlFor="school">Centro Educativo:</label>
				<input
					type="text"
					id="school"
					name="school"
					value={props.form.school || ''}
					onChange={props.handleChangeArr}
				></input>
			</div>
			<div className="form-item">
				<label htmlFor="degreeTitle">Titulo Obtenido:</label>
				<input
					type="text"
					id="degreeTitle"
					name="degreeTitle"
					value={props.form.degreeTitle || ''}
					onChange={props.handleChangeArr}
				></input>
			</div>

			<div className="form-item">
				<label htmlFor="schoolCity">Lugar:</label>
				<input
					type="text"
					id="schoolCity"
					name="schoolCity"
					value={props.form.schoolCity || ''}
					onChange={props.handleChangeArr}
				></input>
			</div>

			<div className="form-item">
				<h3>Duración:</h3>
				<label htmlFor="degreeDateStart">Desde</label>
				<input
					type="date"
					id="degreeDateStart"
					name="degreeDateStart"
					value={props.form.degreeDateStart || ''}
					onChange={props.handleChangeArr}
				></input>

				<label htmlFor="degreeDateEnd">Hasta</label>
				<input
					type="date"
					id="degreeDateEnd"
					name="degreeDateEnd"
					value={props.form.degreeDateEnd || ''}
					onChange={props.handleChangeArr}
				></input>
			</div>

			<button className="btn" name="education" onClick={props.handleSubmitArr}>
				Agregar
			</button>
		</section>
	);
}
