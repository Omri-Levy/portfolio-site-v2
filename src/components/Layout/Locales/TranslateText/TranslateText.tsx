import { FormattedMessage } from 'react-intl';
import React from 'react';
import { Props } from './types';
import { camelCase } from 'lodash';

const TranslateText: React.FunctionComponent<Props> = ({ text }) => (
	<FormattedMessage id={camelCase(text)} defaultMessage={text} />
);

export default TranslateText;
