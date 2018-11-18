import React, { useState } from 'react';

import { Header } from '../components';

const Resume = () => {
	// State is now Present in value Object
	const [data, setData] = useState({
		title: {
			name: {
				placeholder: 'Enter Name',
				value: 'John Doe',
				type: 'title',
				name: 'name',
			},
			role: {
				placeholder: 'Enter Role',
				value: 'Javascript Engineer. UI/UX Designer.',
				type: 'text',
				name: 'role',
			},
		},
		contacts: {
			email: {
				placeholder: 'Enter Email',
				value: 'johndoe@gmail.com',
				type: 'text',
				name: 'email',
			},
			phone: {
				placeholder: 'Enter Phone',
				value: '+91 - 9654234112',
				type: 'text',
				name: 'phone',
			},
			link: {
				placeholder: 'Enter link',
				value: 'github.com/jyash97',
				type: 'text',
				name: 'link',
			},
		},
	});

	return (
		<>
			<Header setData={setData} data={data} />
		</>
	);
};

export default Resume;
