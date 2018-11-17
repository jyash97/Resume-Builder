import React from 'react';
import { css } from 'emotion';

import { getColor } from './theme';

const buttonStyles = type => {
	let backgroundColor = '';
	let color = type;
	let shadow = type;

	switch (type) {
		case 'primary': {
			backgroundColor = type;
			color = 'white';
			break;
		}
		case 'danger': {
			backgroundColor = type;
			color = 'white';
			break;
		}
		default: {
			backgroundColor = 'white';
			color = 'primary';
			shadow = 'primary';
		}
	}

	return css`
		position: relative;
		outline: none;
		border: 1px solid ${getColor(color)};
		top: 0;
		background: ${getColor(backgroundColor)};
		color: ${getColor(color)};
		padding: 10px 20px;
		font-size: 14px;
		border-radius: 20px;
		margin: 5px 10px;
		cursor: pointer;
		box-shadow: 0 2px 5px ${getColor(shadow, '33')};
		transition: all ease 0.2s;
		:hover {
			top: -2px;
			box-shadow: 0 4px 5px ${getColor(shadow, '66')};
		}
		:focus {
			background: ${getColor(shadow, 'cc')};
		}
	`;
};

const Button = ({ type, text, onClick }) => (
	<button type="button" onClick={onClick} className={buttonStyles(type)}>
		{text}
	</button>
);

export default Button;
