import React from 'react';
import { ChildrenProps } from '../../../utils/types';
import useStyles from './useStyles';

const Content: React.FunctionComponent<ChildrenProps> = ({ children }) => {
	const classes = useStyles();

	return <main className={classes.content}>{children}</main>;
};

export default Content;
