import React from 'react';
import { css } from 'emotion';

import Input from './Input';

const headerStyles = css`
	display: flex;
	flex-direction: row;
	padding: 20px;
	justify-content: space-between;
	div {
		flex-direction: column;
		display: flex;
	}
`;

const Header = ({ data, inputNames, setData }) => {
	function setInputValue(e) {
		const inputState = data;
		const {
			target: { name, value },
		} = e;
		inputState[name].value = value;
		setData(inputState);
	}
	const profileInput = inputNames.filter(input => input === 'name' || input === 'role');
	const contactInputs = inputNames.filter(input => input !== 'name' && input !== 'role');
	return (
		<div className={headerStyles}>
			<div>
				{profileInput.map(input => (
					<Input
						key={data[input].name}
						name={data[input].name}
						type={data[input].type}
						value={data[input].value}
						onChange={e => setInputValue(e)}
						placeholder={data[input].placeholder}
					/>
				))}
			</div>
			<div
				className={css`
					input {
						text-align: right;
					}
				`}
			>
				{contactInputs.map(input => (
					<Input
						key={data[input].name}
						name={data[input].name}
						type={data[input].type}
						value={data[input].value}
						onChange={e => setInputValue(e)}
						placeholder={data[input].placeholder}
					/>
				))}
			</div>
		</div>
	);
};

export default Header;
