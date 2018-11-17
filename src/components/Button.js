import React from 'react';
import { css } from 'emotion';

const buttonStyles = type => {
	if (type === 'secondary') {
		return css`
			position: relative;
			outline: none;
			border: 0;
			top: 0;
			background: white;
			color: #4e54c8;
			padding: 10px 20px;
			font-size: 14px;
			border-radius: 20px;
			cursor: pointer;
			transition: all ease 0.2s;
			box-shadow: 0 2px 5px rgba(78, 84, 200, 0.2);
			:hover {
				top: -2px;
				box-shadow: 0 6px 5px 1px rgba(78, 84, 200, 0.4);
			}
			:focus {
				background: rgba(255, 255, 255, 0.8);
			}
		`;
	}
};

const Button = ({ type, text, onClick }) => (
	<button type="button" onClick={onClick} className={buttonStyles(type)}>
		{text}
	</button>
);

export default Button;
