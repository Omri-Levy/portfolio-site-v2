import React from 'react';
import useStyles from './useStyles';
import { Props } from './types';
import { PageTitle } from '~/components/Layout/PageContainer/PageTitle';
import clsx from 'clsx';

const PageContainer: React.FunctionComponent<Props> = (props) => {
	const { pageContainer } = useStyles();
	const { Icon, text, id, className } = props;
	const classes = className ? clsx(className, pageContainer) : pageContainer;

	return (
		<section className={classes} id={id}>
			<PageTitle Icon={Icon} text={text} />
			{props.children}
		</section>
	);
};

export default PageContainer;
