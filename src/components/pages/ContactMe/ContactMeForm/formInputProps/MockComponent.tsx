import { TextField } from '@material-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';
import FormInputProps from '.';

const MockComponent: React.FunctionComponent = () => {
	const { register } = useForm();
	const formInputProps = new FormInputProps(register);
	const { ref, maxLength } = formInputProps.setMaxLength(640);

	if (!ref) {
		return null;
	}

	return <TextField name={`test text field`} inputProps={{ maxLength }} />;
};

export default MockComponent;
