import { Container as MuiContainer } from '@material-ui/core';
import React from 'react';
import { Props } from './types';
import useStyles from './useStyles';

const Container: React.FunctionComponent<Props> = ({ children, ...props }) => {
	const classes = useStyles();

	return (
		<MuiContainer className={classes.mainContainer} maxWidth={false} {...props}>
			{children}
		</MuiContainer>
	);
};

export default Container;
