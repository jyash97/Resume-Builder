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
	const { data, moveInput } = useContext(InputData);
	const profileInput = data.title;
	const contactInputs = data.contact;

	return (
		<div className={headerStyles}>
			<div>
				{Object.keys(profileInput)
					.sort(
						(prevInput, nextInput) =>
							profileInput[prevInput].index - profileInput[nextInput].index,
					)
					.map(input => (
						<div key={profileInput[input].name}>
							<Input
								name={profileInput[input].name}
								type={profileInput[input].type}
								value={profileInput[input].value}
								field="title"
								moveInput={moveInput}
								placeholder={profileInput[input].placeholder}
							/>
						</div>
					))}
			</div>
			<div>
				{Object.keys(contactInputs)
					.sort(
						(prevInput, nextInput) =>
							contactInputs[prevInput].index - contactInputs[nextInput].index,
					)
					.map(input => (
						<div key={contactInputs[input].name}>
							<Input
								name={contactInputs[input].name}
								type={contactInputs[input].type}
								value={contactInputs[input].value}
								moveInput={moveInput}
								field="contact"
								placeholder={contactInputs[input].placeholder}
							/>
						</div>
					))}
			</div>
		</div>
	);
};

export default Header;
