import { Button } from 'gatsby-theme-material-ui';
import React from 'react';
import { ButtonProps } from '../../utils/types';
import { TranslateText } from '../TranslateText';

const PrimaryButton: React.FunctionComponent<ButtonProps> = (props) => {
	return (
		<Button
			to={props.to ?? undefined}
			//@ts-ignore
			target={props.to ?? '_blank'}
			variant={'contained'}
			color={'primary'}
			{...props}
		>
			<TranslateText text={props.text} />
		</Button>
	);
};

export default PrimaryButton;
