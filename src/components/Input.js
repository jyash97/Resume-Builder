import React, { useState } from 'react';
import { Plus, MoreVertical } from 'react-feather';
import { css } from 'emotion';
import Button from './Button';

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

const inputContainer = css`
	display: flex;
	align-items: center;
`;

const inputOptionStyles = isIconVisible => css`
	opacity: ${Number(isIconVisible)};
	transition: opacity 0.2s ease;
`;

const Input = ({ value, placeholder, name, onChange, type }) => {
	const [showIcon, setIconVisibility] = useState(false);
	return (
		<div
			className={inputContainer}
			onMouseEnter={() => setIconVisibility(true)}
			onMouseLeave={() => setIconVisibility(false)}
		>
			<input
				onChange={onChange}
				name={name}
				className={inputStyles(type)}
				placeholder={placeholder}
				value={value}
			/>
			<div className={inputOptionStyles(showIcon)}>
				<Button
					icon={<Plus size={16} />}
					type="secondary"
					onClick={() => console.log('works')}
				/>
				<Button
					icon={<MoreVertical size={16} />}
					type="secondary"
					onClick={() => console.log('works')}
				/>
			</div>
		</div>
	);
};

export default Input;
