import React, { Component } from 'react';
import ReactToPrint from 'react-to-print';

import './styles/App.css';
import Form from './components/Form';
import Header from './components/Header';
import Overview from './components/Overview';
import pic from './pic.png';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			form: {},
			education: {},
			jobs: {},
			image: null,
		};
	}

	handleChange = (e) => {
		this.setState({
			form: {
				...this.state.form,
				[e.target.name]: e.target.value,
			},
		});
	};

	handleChangeArr = (e) => {
		let handler = e.target.parentElement.parentElement.lastChild.name;
		this.setState({
			[handler]: {
				...this.state[handler],
				[e.target.name]: e.target.value,
			},
		});
	};

	handleSubmitArr = (e) => {
		e.preventDefault();
		let array = [e.target.name];
		if (!this.state[array]) {
			alert('Por favor Verifique los datos ingresados');
			return;
		}
		if (!this.state.form[array]) {
			this.setState({
				form: {
					...this.state.form,
					[e.target.name]: [this.state[array]],
				},
				[array]: '',
			});
		} else {
			this.setState({
				form: {
					...this.state.form,
					[e.target.name]: [...this.state.form[array], this.state[array]],
				},
				[array]: '',
			});
		}
	};

	render() {
		const { form, education, jobs } = this.state;
		return (
			<div className="app">
				<Header />

				<Form
					handleChange={this.handleChange}
					form={form}
					handleChangeArr={this.handleChangeArr}
					handleSubmitArr={this.handleSubmitArr}
					education={education}
					jobs={jobs}
				/>
				<Overview ref={(el) => (this.componentRef = el)} form={form} />
				<ReactToPrint
					trigger={() => {
						return <button className="btn btn-print">Imprimir</button>;
					}}
					content={() => this.componentRef}
				/>
			</div>
		);
	}
}
