import { Container as MuiContainer } from '@material-ui/core';
import React from 'react';
import useStyles from './useStyles';
import { Props } from './types';

const Container: React.FunctionComponent<Props> = ({ children, ...props }) => {
	const classes = useStyles();

	return (
		<MuiContainer className={classes.mainContainer} maxWidth={false} {...props}>
			{children}
		</MuiContainer>
	);
};

export default Container;
