import React from 'react';

export default function GeneralInfo(props) {
	const fileInputRef = React.createRef();

	return (
		<section className="generalInfo form-section">
			<h2>Informacion Personal</h2>

			<div className="form-item">
				<label htmlFor="name">Nombres:</label>
				<input
					type="text"
					id="name"
					name="name"
					value={props.form.name}
					onChange={props.handleChange}
				></input>
			</div>
			<div className="form-item">
				<label htmlFor="lastName">Apellidos:</label>
				<input
					type="text"
					id="lastName"
					name="lastName"
					value={props.form.lastName}
					onChange={props.handleChange}
				></input>
			</div>

			<div className="form-item">
				<label htmlFor="email">Correo Electronico:</label>
				<input
					type="email"
					id="email"
					name="email"
					value={props.form.email}
					onChange={props.handleChange}
				></input>
			</div>

			<div className="form-item">
				<label htmlFor="address">Dirección:</label>
				<input
					type="text"
					id="address"
					name="address"
					value={props.form.address}
					onChange={props.handleChange}
				></input>
			</div>

			<div className="form-item">
				<label htmlFor="phone">Teléfono:</label>
				<input
					type="text"
					id="phone"
					name="phone"
					value={props.form.phone}
					onChange={props.handleChange}
				></input>
			</div>

			<div className="form-item">
				<label htmlFor="img">Foto:</label>
				<button
					className="btn"
					onClick={(e) => {
						e.preventDefault();
						fileInputRef.current.click();
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
					ref={fileInputRef}
					onChange={props.handleImage}
				></input>
			</div>
		</section>
	);
}
