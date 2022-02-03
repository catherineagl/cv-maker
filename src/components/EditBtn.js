import React, { Component } from 'react';

export default class EditBtn extends Component {
	render() {
		return (
			<button
				className="btn btn-print"
				onClick={(e) => {
					e.preventDefault();
					this.props.handleEdit();
				}}
			>
				Editar Datos
			</button>
		);
	}
}
