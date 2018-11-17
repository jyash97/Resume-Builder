import React from 'react';

const Input = ({ value, placeholder, name, onChange }) => (
	<input onChange={onChange} name={name} placeholder={placeholder} value={value} />
);

export default Input;
