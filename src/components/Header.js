import React, { useContext } from 'react';
import { css } from 'emotion';

import Input from './Input';
import { InputData } from '../pages/Resume';

const headerStyles = css`
	display: flex;
	flex-direction: row;
	padding: 20px;
	justify-content: space-between;
`;

const Header = () => {
	const { data } = useContext(InputData);
	const profileInput = data.title;
	const contactInputs = data.contact;
	return (
		<div className={headerStyles}>
			<div>
				{Object.keys(profileInput).map(input => (
					<Input
						key={profileInput[input].name}
						name={profileInput[input].name}
						type={profileInput[input].type}
						value={profileInput[input].value}
						field="title"
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
						field="contact"
						placeholder={contactInputs[input].placeholder}
					/>
				))}
			</div>
		</div>
	);
};

export default Header;
