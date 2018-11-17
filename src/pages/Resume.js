import React, { useState } from 'react';

import { Input } from '../components';

const Resume = () => {
	// State is now Present in value Object
	const [data, setData] = useState({
		title: 'First Name',
		surname: 'Surname',
	});

	return (
		<>
			<Input
				name="title"
				value={data.title}
				onChange={e => setData({ ...data, [e.target.name]: e.target.value })}
				placeholder="Enter Name"
			/>
			<Input
				name="surname"
				value={data.surname}
				onChange={e => setData({ ...data, [e.target.name]: e.target.value })}
				placeholder="Enter Name"
			/>
		</>
	);
};

export default Resume;
