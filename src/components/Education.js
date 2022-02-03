import React, { Component } from 'react';

export default class Education extends Component {
	render() {
		return (
			<section className="form-section">
				<h2>Educación</h2>

				<div className="form-item">
					<label htmlFor="school">Centro Educativo:</label>
					<input
						type="text"
						id="school"
						name="school"
						value={this.props.form.school || ''}
						onChange={this.props.handleChangeArr}
					></input>
				</div>
				<div className="form-item">
					<label htmlFor="degreeTitle">Titulo Obtenido:</label>
					<input
						type="text"
						id="degreeTitle"
						name="degreeTitle"
						value={this.props.form.degreeTitle || ''}
						onChange={this.props.handleChangeArr}
					></input>
				</div>

				<div className="form-item">
					<label htmlFor="schoolCity">Lugar:</label>
					<input
						type="text"
						id="schoolCity"
						name="schoolCity"
						value={this.props.form.schoolCity || ''}
						onChange={this.props.handleChangeArr}
					></input>
				</div>

				<div className="form-item">
					<h3>Duración:</h3>
					<label htmlFor="degreeDateStart">Desde</label>
					<input
						type="date"
						id="degreeDateStart"
						name="degreeDateStart"
						value={this.props.form.degreeDateStart || ''}
						onChange={this.props.handleChangeArr}
					></input>

					<label htmlFor="degreeDateEnd">Hasta</label>
					<input
						type="date"
						id="degreeDateEnd"
						name="degreeDateEnd"
						value={this.props.form.degreeDateEnd || ''}
						onChange={this.props.handleChangeArr}
					></input>
				</div>

				<button
					className="btn"
					name="education"
					onClick={this.props.handleSubmitArr}
				>
					Agregar
				</button>
			</section>
		);
	}
}
