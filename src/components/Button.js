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
		vertical-align: middle;
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
			background: ${getColor(backgroundColor, 'cc')};
		}
		span {
			margin-left: 8px;
			vertical-align: middle;
		}
	`;
};

const iconStyles = css`
	color: #d4d5d8;
	padding: 4px;
	background: #fafaff;
	vertical-align: middle;
	outline: none;
	border: 0;
	cursor: pointer;
	transition: all ease 0.1s;
	border-radius: 3px;
	margin: 2px 5px;
	:hover {
		background: #f4faff;
		color: ${getColor('text')};
	}
`;

const Button = ({ type, text, onClick, icon }) =>
	text ? (
		<button type="button" onClick={onClick} className={buttonStyles(type)}>
			{text}
			<span>{icon && icon}</span>
		</button>
	) : (
		<button type="button" onClick={onClick} className={iconStyles}>
			{icon}
		</button>
	);

export default Button;
