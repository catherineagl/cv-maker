import React from 'react';

export default function CancelBtn(props) {
	return (
		<button
			className="btn btn-print"
			onClick={(e) => {
				e.preventDefault();
				props.cancelEdit();
			}}
		>
			Cancelar Edición
		</button>
	);
}
