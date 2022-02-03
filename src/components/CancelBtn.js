import React, { Component } from 'react';

export default class CancelBtn extends Component {
	render() {
		return (
			<button
				className="btn btn-print"
				onClick={(e) => {
					e.preventDefault();
					this.props.cancelEdit();
				}}
			>
				Cancelar Edición
			</button>
		);
	}
}
