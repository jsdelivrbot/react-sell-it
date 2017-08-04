import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({name, label, onChange, placeholder, value, error, type="text"}) => {
	let wrapperClass = 'form-group';
	if (error && error.length > 0) {
		wrapperClass += " " + 'has-error';
	}

	return (
		<div className={wrapperClass}>
			<input
				type={type}
				name={name}
				placeholder={placeholder}
				value={value}
				onChange={onChange}/>
			{error && <div className="alert alert-danger">{error}</div>}
		</div>
	);
};

TextInput.propTypes = {
	name: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	placeholder: PropTypes.string,
	value: PropTypes.string,
	error: PropTypes.string
};

export default TextInput;