import React, { Component } from 'react';
import ReactToPrint from 'react-to-print';
import uniqid from 'uniqid';

import './styles/App.css';
import Form from './components/Form';
import Header from './components/Header';
import Overview from './components/Overview';
import EditBtn from './components/EditBtn';
import CancelBtn from './components/CancelBtn';
import Footer from './components/Footer';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			form: {},
			education: {},
			jobs: {},
			image: null,
			isEditing: false,
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
				id: uniqid(),
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

	handleEdit = () => {
		this.setState({ isEditing: true });
	};

	cancelEdit = () => {
		this.setState({ isEditing: false });
	};

	deleteItem = (id, name) => {
		let item = this.state.form[name].filter((el) => el.id !== id);
		this.setState({
			form: {
				...this.state.form,
				[name]: item,
			},
		});
	};

	editContent = (id, name) => {
		this.deleteItem(id, name);
		let item = this.state.form[name].find((el) => el.id === id);
		this.setState({
			[name]: item,
			isEditing: false,
		});
	};

	render() {
		const { form, education, jobs, isEditing } = this.state;
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
					isEditing={isEditing}
				/>
				<Overview
					ref={(el) => (this.componentRef = el)}
					form={form}
					isEditing={isEditing}
					editContent={this.editContent}
					deleteItem={this.deleteItem}
				/>

				{isEditing && <CancelBtn cancelEdit={this.cancelEdit} />}
				{!isEditing && (
					<EditBtn handleEdit={this.handleEdit} isEditing={isEditing} />
				)}

				{!isEditing && (
					<ReactToPrint
						trigger={() => {
							return <button className="btn btn-print">Imprimir</button>;
						}}
						content={() => this.componentRef}
					/>
				)}
				<Footer />
			</div>
		);
	}
}
