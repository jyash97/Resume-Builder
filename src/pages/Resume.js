import React, { useState } from 'react';

import { Header } from '../components';

export const InputData = React.createContext({});

const Resume = () => {
	// State is now Present in value Object
	const [data, setData] = useState({
		title: {
			name: {
				placeholder: 'Enter Name',
				value: 'John Doe',
				type: 'title',
				name: 'name',
				index: 0,
			},
			role: {
				placeholder: 'Enter Role',
				value: 'Javascript Engineer. UI/UX Designer.',
				type: 'text',
				name: 'role',
				index: 1,
			},
		},
		contact: {
			email: {
				placeholder: 'Enter Email',
				value: 'johndoe@gmail.com',
				type: 'text',
				name: 'email',
				index: 0,
			},
			phone: {
				placeholder: 'Enter Phone',
				value: '+91 - 9654234112',
				type: 'text',
				name: 'phone',
				index: 1,
			},
			link: {
				placeholder: 'Enter link',
				value: 'github.com/jyash97',
				type: 'text',
				name: 'link',
				index: 2,
			},
		},
	});

	function moveInput({ hoveredEntry, currentEntry, field }) {
		const fieldData = data[field];
		const newIndex = fieldData[hoveredEntry].index;
		fieldData[hoveredEntry].index = fieldData[currentEntry].index;
		fieldData[currentEntry].index = newIndex;
		setData({ ...data, [field]: fieldData });
	}

	function setInputValue(e, field) {
		const inputState = data;
		const {
			target: { name, value },
		} = e;
		inputState[field][name].value = value;
		setData(inputState);
	}

	function addInput(name, key) {
		console.log(name, key);
	}

	const contextValue = {
		setInputValue,
		addInput,
		data,
		moveInput,
	};

	return (
		<InputData.Provider value={contextValue}>
			<Header />
		</InputData.Provider>
	);
};

export default Resume;
