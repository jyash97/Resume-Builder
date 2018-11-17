import React from 'react';
import { css } from 'emotion';

import { getColor, getFontSize, getFontWeight } from './theme';

const inputStyles = type => css`
	color: ${getColor(type)};
	font-size: ${getFontSize(type)};
	font-weight: ${getFontWeight(type)};
	border: 0;
	outline: none;
	padding: 8px 14px;
	min-width: 350px;
	:hover {
		background: #fafaff;
	}
	:active,
	:focus {
		background: #f4faff;
	}
`;

const Input = ({ value, placeholder, name, onChange, type }) => (
	<input
		onChange={onChange}
		name={name}
		className={inputStyles(type)}
		placeholder={placeholder}
		value={value}
	/>
);

export default Input;
