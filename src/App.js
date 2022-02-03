import React, { useState, useRef, useEffect } from 'react';

import uniqid from 'uniqid';
import { useReactToPrint } from 'react-to-print';

import './styles/App.css';
import Form from './components/Form';
import Header from './components/Header';
import { Overview } from './components/Overview';
import EditBtn from './components/EditBtn';
import CancelBtn from './components/CancelBtn';
import Footer from './components/Footer';
import pic from './pic.png';

const App = () => {
	const [form, setForm] = useState({});
	const [education, setEducation] = useState({});
	const [jobs, setJobs] = useState({});
	const [image, setImage] = useState(null);
	const [isEditing, setIsEditing] = useState(false);
	const [preview, setPreview] = useState(pic);

	useEffect(() => {
		if (image) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setPreview(reader.result);
			};

			reader.readAsDataURL(image);
		} else {
			setPreview(pic);
		}
	}, [image]);

	const handleChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	const handleChangeArr = (e) => {
		let handler = e.target.parentElement.parentElement.lastChild.name;
		if (handler === 'education') {
			setEducation({
				...education,
				[e.target.name]: e.target.value,
				id: uniqid(),
			});
		} else {
			setJobs({
				...jobs,
				[e.target.name]: e.target.value,
				id: uniqid(),
			});
		}
	};

	const handleSubmitArr = (e) => {
		e.preventDefault();
		let array = e.target.name;
		if ((array === 'education' && !education) || (array === 'jobs' && !jobs)) {
			alert('Por favor Verifique los datos ingresados');
			return;
		}
		if (array === 'education') {
			if (!form.education) {
				setForm({
					...form,
					education: [education],
				});
			} else {
				setForm({
					...form,
					education: [...form.education, education],
				});
			}
			setEducation('');
		} else {
			if (!form.jobs) {
				setForm({
					...form,
					jobs: [jobs],
				});
			} else {
				setForm({
					...form,
					jobs: [...form.jobs, jobs],
				});
			}

			setJobs('');
		}
	};

	const handleEdit = () => {
		setIsEditing(true);
	};

	const cancelEdit = () => {
		setIsEditing(false);
	};

	const deleteItem = (id, name) => {
		if (name === 'education') {
			let item = form.education.filter((el) => el.id !== id);
			setForm({
				...form,
				education: item,
			});
		} else {
			let item = form.jobs.filter((el) => el.id !== id);
			setForm({
				...form,
				jobs: item,
			});
		}
	};

	const editContent = (id, name) => {
		deleteItem(id, name);

		if (name === 'education') {
			let item = form.education.find((el) => el.id === id);
			setEducation(item);
		} else {
			let item = form.jobs.find((el) => el.id === id);
			setJobs(item);
		}
		setIsEditing(false);
	};

	const handleImage = (e) => {
		const file = e.target.files[0];
		if (file && file.type.substr(0, 5) === 'image') {
			setImage(file);
		} else {
			image(pic);
		}
	};
	const componentRef = useRef();
	const handlePrint = useReactToPrint({
		content: () => componentRef.current,
	});

	return (
		<div className="app">
			<Header />

			<Form
				handleChange={handleChange}
				form={form}
				handleChangeArr={handleChangeArr}
				handleSubmitArr={handleSubmitArr}
				education={education}
				jobs={jobs}
				isEditing={isEditing}
				handleImage={handleImage}
			/>
			<Overview
				form={form}
				isEditing={isEditing}
				editContent={editContent}
				deleteItem={deleteItem}
				ref={componentRef}
				image={preview}
			/>

			{isEditing && <CancelBtn cancelEdit={cancelEdit} />}
			{!isEditing && <EditBtn handleEdit={handleEdit} isEditing={isEditing} />}

			{!isEditing && (
				<button className="btn btn-print" onClick={handlePrint}>
					Imprimir
				</button>
			)}
			<Footer />
		</div>
	);
};

export default App;
