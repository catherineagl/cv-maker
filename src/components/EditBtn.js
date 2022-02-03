import React from 'react';

export default function EditBtn(props) {
	return (
		<button
			className="btn btn-print"
			onClick={(e) => {
				e.preventDefault();
				props.handleEdit();
			}}
		>
			Editar Datos
		</button>
	);
}
