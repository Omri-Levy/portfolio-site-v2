import { Ref } from 'react-hook-form';
import { Props } from './types';

class FormInputProps {
	public register: Ref;

	constructor(ref: Ref) {
		this.register = ref;
	}

	public setMaxLength(maxLength: number): Props {
		return {
			ref: this.register,
			maxLength,
		};
	}
}

export default FormInputProps;
