import React from 'react';
import { BLOCKS } from '@contentful/rich-text-types';
import { Node } from '../../types';
import { StyledTypography } from '../../styled';

const useContentfulOptions = () => ({
	renderNode: {
		[BLOCKS.PARAGRAPH]: (node: Node, children: React.ReactNode) => {
			if (!node.content[0].value) return;

			return (
				<StyledTypography
					variant={`body2`}
					color={`textSecondary`}
					// @ts-ignore
					component={`p`}
				>
					{children}
				</StyledTypography>
			);
		},
	},
});

export default useContentfulOptions;
