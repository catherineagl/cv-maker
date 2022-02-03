import React, { Component } from 'react';

export default class GeneralInfo extends Component {
	constructor(props) {
		super(props);
		this.fileInputRef = React.createRef();
	}
	render() {
		return (
			<section className="generalInfo form-section">
				<h2>Informacion Personal</h2>

				<div className="form-item">
					<label htmlFor="name">Nombres:</label>
					<input
						type="text"
						id="name"
						name="name"
						value={this.props.form.name}
						onChange={this.props.handleChange}
					></input>
				</div>
				<div className="form-item">
					<label htmlFor="lastName">Apellidos:</label>
					<input
						type="text"
						id="lastName"
						name="lastName"
						value={this.props.form.lastName}
						onChange={this.props.handleChange}
					></input>
				</div>

				<div className="form-item">
					<label htmlFor="email">Correo Electronico:</label>
					<input
						type="email"
						id="email"
						name="email"
						value={this.props.form.email}
						onChange={this.props.handleChange}
					></input>
				</div>

				<div className="form-item">
					<label htmlFor="address">Dirección:</label>
					<input
						type="text"
						id="address"
						name="address"
						value={this.props.form.address}
						onChange={this.props.handleChange}
					></input>
				</div>

				<div className="form-item">
					<label htmlFor="phone">Teléfono:</label>
					<input
						type="text"
						id="phone"
						name="phone"
						value={this.props.form.phone}
						onChange={this.props.handleChange}
					></input>
				</div>

				<div className="form-item">
					<label htmlFor="img">Foto:</label>
					<button
						className="btn"
						onClick={(e) => {
							e.preventDefault();
							this.fileInputRef.current.click();
						}}
					>
						Agregar Foto
					</button>
					<input
						type="file"
						id="img"
						name="img"
						accept="image/*"
						style={{ display: 'none' }}
					></input>
				</div>
			</section>
		);
	}
}
