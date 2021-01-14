import clsx from 'clsx';
import React from 'react';
import PageTitle from './PageTitle';
import { Props } from './types';
import useStyles from './useStyles';

const PageContainer: React.FunctionComponent<Props> = (props) => {
	const { pageContainer } = useStyles();
	const { Icon, text, id, className } = props;
	const classes = className ? clsx(className, pageContainer) : pageContainer;

	return (
		<section className={`${classes} pageSection`} id={id}>
			<PageTitle Icon={Icon} text={text} />
			{props.children}
		</section>
	);
};

export default PageContainer;
