import React, { Component } from 'react';
import '../styles/Overview.css';
import pic from '../pic.png';
export default class Overview extends Component {
	render() {
		const { form } = this.props;
		/* 		if (image) {
			const reader = new FileReader();
			reader.onloadend = () => {
				this.setState({ preview: [reader.result] });
			};
			reader.readAsDataUrl(image);
		} else {
			this.setState({ preview: [pic] });
		} */
		const options = { year: 'numeric', month: 'long' };
		return (
			<div className="overview">
				<h2 className="cv-title">
					CV {form.name} {form.lastName}
				</h2>
				<div className="section-wrapper">
					<section className="cv-section education">
						<h2>Educación</h2>
						{form.education &&
							form.education.map((el) => {
								return (
									<div className="card">
										<h3>
											Centro Educativo: <span>{el.school}</span>
										</h3>
										<h3>
											Titulo Obtenido: <span>{el.degreeTitle}</span>
										</h3>
										<h3>
											Lugar: <span>{el.schoolCity}</span>
										</h3>
										<h3>
											Duración:{' '}
											<span>
												{new Date(el.degreeDateStart).toLocaleDateString(
													undefined,
													options
												) || '-'}{' '}
												-{' '}
												{new Date(el.degreeDateEnd).toLocaleDateString(
													undefined,
													options
												) || '-'}
											</span>
										</h3>
									</div>
								);
							})}
					</section>
					<section className="cv-section work">
						<h2>Experiencia Laboral</h2>
						{form.jobs &&
							form.jobs.map((el) => {
								return (
									<div className="card">
										<h3>
											Nombre de la empresa: <span>{el.company}</span>
										</h3>
										<h3>
											Cargo: <span>{el.companyPosition}</span>
										</h3>
										<h3>
											Lugar: <span>{el.companyCity}</span>
										</h3>
										<h3>
											Duración:{' '}
											<span>
												{new Date(el.workDateStart).toLocaleDateString(
													undefined,
													options
												) || '-'}{' '}
												-{' '}
												{new Date(el.workDateEnd).toLocaleDateString(
													undefined,
													options
												) || '-'}
											</span>
										</h3>
									</div>
								);
							})}
					</section>

					<section className="cv-section personal">
						<figure>
							<img src={pic} alt="people-pic" id="pic-profile"></img>
						</figure>
						<h2>Datos Personales</h2>
						<h3>
							Nombre(s): <span>{form.name}</span>
						</h3>
						<h3>
							Apellidos(s): <span>{form.lastName}</span>
						</h3>
						<h3>
							Correo Electronico: <span>{form.email}</span>
						</h3>
						<h3>
							Dirección: <span>{form.address}</span>
						</h3>
						<h3>
							Teléfono: <span>{form.phone}</span>
						</h3>
					</section>
				</div>
			</div>
		);
	}
}
