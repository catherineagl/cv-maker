import React, { Component } from 'react';

export default class Jobs extends Component {
	render() {
		return (
			<section className="form-section">
				<h2>Experiencia Laboral</h2>

				<div className="form-item">
					<label htmlFor="company">Nombre de la Empresa:</label>
					<input
						type="text"
						id="company"
						name="company"
						value={this.props.form.company || ''}
						onChange={this.props.handleChangeArr}
					></input>
				</div>
				<div className="form-item">
					<label htmlFor="companyPosition">Cargo:</label>
					<input
						type="text"
						id="companyPosition"
						name="companyPosition"
						value={this.props.form.companyPosition || ''}
						onChange={this.props.handleChangeArr}
					></input>
				</div>

				<div className="form-item">
					<label htmlFor="companyCity">Lugar:</label>
					<input
						type="text"
						id="companyCity"
						name="companyCity"
						value={this.props.form.companyCity || ''}
						onChange={this.props.handleChangeArr}
					></input>
				</div>

				<div className="form-item">
					<h3>Duración:</h3>
					<label htmlFor="workDateStart">Desde</label>
					<input
						type="date"
						id="workDateStart"
						name="workDateStart"
						value={this.props.form.workDateStart || ''}
						onChange={this.props.handleChangeArr}
					></input>

					<label htmlFor="workDateEnd">Hasta</label>
					<input
						type="date"
						id="workDateEnd"
						name="workDateEnd"
						value={this.props.form.workDateEnd || ''}
						onChange={this.props.handleChangeArr}
					></input>
				</div>

				<button
					className="btn"
					onClick={this.props.handleSubmitArr}
					name="jobs"
				>
					Agregar
				</button>
			</section>
		);
	}
}
