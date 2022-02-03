import React from 'react';
import '../styles/Overview.css';

export const Overview = React.forwardRef((props, ref) => {
	const { form, image } = props;

	const options = { year: 'numeric', month: 'long' };

	return (
		<div className="overview" ref={ref}>
			<h2 className="cv-title">
				CV {form.name} {form.lastName}
			</h2>
			<div className="section-wrapper">
				<section className="cv-section education">
					<h2>Educación</h2>
					{form.education &&
						form.education.map((el) => {
							return (
								<div className="card" key={el.id}>
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
									{props.isEditing && (
										<div className="btn-actions">
											<button
												className="btn danger"
												onClick={() => {
													props.deleteItem(el.id, 'education');
												}}
											>
												Eliminar
											</button>
											<button
												className="btn info"
												onClick={() => props.editContent(el.id, 'education')}
											>
												Editar
											</button>
										</div>
									)}
								</div>
							);
						})}
				</section>
				<section className="cv-section work">
					<h2>Experiencia Laboral</h2>
					{form.jobs &&
						form.jobs.map((el) => {
							return (
								<div className="card" key={el.id}>
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
									{props.isEditing && (
										<div className="btn-actions">
											<button
												className="btn danger"
												onClick={() => {
													props.deleteItem(el.id, 'jobs');
												}}
											>
												Eliminar
											</button>
											<button
												className="btn info"
												onClick={() => props.editContent(el.id, 'jobs')}
											>
												Editar
											</button>
										</div>
									)}
								</div>
							);
						})}
				</section>

				<section className="cv-section personal">
					<figure>
						<img src={image} alt="people-pic" id="pic-profile"></img>
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
});
