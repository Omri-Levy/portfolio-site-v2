import { camelCase } from 'lodash';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Props } from './types';

const TranslateText: React.FunctionComponent<Props> = ({ text }) => (
	<FormattedMessage id={camelCase(text)} defaultMessage={text} />
);

export default TranslateText;
