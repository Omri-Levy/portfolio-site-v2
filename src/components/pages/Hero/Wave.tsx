import React, {
	DetailedHTMLProps,
	FunctionComponent,
	HTMLAttributes,
} from 'react';

interface WaveProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	color: string;
};

const Wave: FunctionComponent<WaveProps> = ({ color, ...props }) => {

	return (
		<div {...props}>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 1440 320'
			>
				<path
					fill={color}
					fillOpacity='1'
					d='M0,288L48,282.7C96,277,192,267,288,229.3C384,192,480,128,576,112C672,96,768,128,864,149.3C960,171,1056,181,1152,160C1248,139,1344,85,1392,58.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'>
				</path>
			</svg>
		</div>
	);
};

export default Wave;
