import React from 'react';
import { css } from 'emotion';

import Input from './Input';

const headerStyles = css`
	display: flex;
	flex-direction: row;
	padding: 20px;
	justify-content: space-between;
`;

const Header = ({ data, setData }) => {
	function setInputValue(e, key) {
		const inputState = data;
		const {
			target: { name, value },
		} = e;
		inputState[key][name].value = value;
		setData(inputState);
	}
	const profileInput = data.title;
	const contactInputs = data.contacts;
	return (
		<div className={headerStyles}>
			<div>
				{Object.keys(profileInput).map(input => (
					<Input
						key={profileInput[input].name}
						name={profileInput[input].name}
						type={profileInput[input].type}
						value={profileInput[input].value}
						onChange={e => setInputValue(e, 'title')}
						placeholder={profileInput[input].placeholder}
					/>
				))}
			</div>
			<div>
				{Object.keys(contactInputs).map(input => (
					<Input
						key={contactInputs[input].name}
						name={contactInputs[input].name}
						type={contactInputs[input].type}
						value={contactInputs[input].value}
						onChange={e => setInputValue(e, 'contacts')}
						placeholder={contactInputs[input].placeholder}
					/>
				))}
			</div>
		</div>
	);
};

export default Header;
