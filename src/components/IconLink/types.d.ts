import React from 'react';

interface Props {
	Icon: React.FunctionComponent<{
		className: string;
		style: Record<`padding` | `margin`, string>;
	}>;
	text?: string;
	to: string;
	alt: string;
	pt?: number;
	pr?: number;
	pb?: number;
	pl?: number;
	mt?: number;
	mr?: number;
	mb?: number;
	ml?: number;
	iconPt?: number;
	iconPr?: number;
	iconPb?: number;
	iconPl?: number;
	iconMt?: number;
	iconMr?: number;
	iconMb?: number;
	iconMl?: number;
	textLineHeight?: number;
}

export { Props };
