import { motion } from 'framer-motion';
import React, { FunctionComponent } from 'react';
import useThemeContext from '../../../context/ThemeProvider/useThemeContext';
import { grey } from '@material-ui/core/colors';

interface IllustrationProps {
}

const Illustration: FunctionComponent<IllustrationProps> = () => {
	const { isDarkMode, primaryColor } = useThemeContext();
	const contrastWhite = grey[isDarkMode ? 100 : 900];
	const darkModeContrast = isDarkMode ? `#494865` : `#2f2e41`;

	if (typeof window === `undefined`) {
		return null;
	}

	return (
		<motion.svg
			id='a606ce14-7cf3-4e8b-a3fa-cb9b0e3d5e37'
			data-name='Layer 1'
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 649 599.75899'
			initial={{ y: `-100vh` }}
			animate={{ y: 0 }}
			transition={{
				y: {
					type: `spring`,
					stiffness: 90,
				},
			}}
		>
			<path
				d='M866.76981,630.62241l-52.6832-78.2546s79.78463,27.85334,70.72994,78.2546Z'
				// big leaf
				transform='translate(-275.5 -150.1205)' fill={contrastWhite} />
			<path
				d='M320.66236,631.1416l-2-.03906a463.83212,463.83212,0,0,1,7.0996-66.28711c8.64844-46.88086,23.0293-77.66992,42.74317-91.51172l1.14844,1.63672C323.60181,507.27442,320.68579,629.90625,320.66236,631.1416Z'
				// big flower's base
				transform='translate(-275.5 -150.1205)' fill={contrastWhite} />
			<path
				d='M345.66236,630.66309l-2-.03906c.043-2.21485,1.293-54.41407,21.84277-68.8418l1.14844,1.63672C346.93286,577.26465,345.67212,630.13086,345.66236,630.66309Z'
				// small flower's base
				transform='translate(-275.5 -150.1205)' fill={contrastWhite} />
			<circle cx='105.5315' cy='315.00156' r='10.00001'
							fill={primaryColor.colorWithShade} />
			<circle cx='100.57935' cy='401.00158' r='10'
							fill={primaryColor.colorWithShade} />
			<path
				d='M341.00113,481.11664c1.87935,12.004-3.0189,22.7406-3.0189,22.7406s-7.9453-8.72583-9.82465-20.72986,3.01891-22.7406,3.01891-22.7406S339.12177,469.11261,341.00113,481.11664Z'
				// large flower left leaf
				transform='translate(-275.5 -150.1205)' fill={contrastWhite} />
			<path
				d='M373.6883,510.27045c-11.493,3.9422-22.91878.98962-22.91878.98962s7.20793-9.34411,18.70088-13.28631,22.91879-.98963,22.91879-.98963S385.18125,506.32825,373.6883,510.27045Z'
				// large flower right leaf
				transform='translate(-275.5 -150.1205)' fill={contrastWhite} />
			<path
				d='M374.05754,586.43158a31.13456,31.13456,0,0,1-16.06421.69367,28.37371,28.37371,0,0,1,29.172-10.00629A31.13419,31.13419,0,0,1,374.05754,586.43158Z'
				// small flower's leaf
				transform='translate(-275.5 -150.1205)' fill={contrastWhite} />
			<path d='M923.5,632.62241h-647a1,1,0,0,1,0-2h647a1,1,0,0,1,0,2Z'
				// platform
						transform='translate(-275.5 -150.1205)' fill={contrastWhite} />
			<polygon
				points='409.792 528.602 401.611 549.895 315.587 528.472 327.661 497.045 409.792 528.602'
				fill='#ffb7b7' />
			<path
				d='M708.01889,681.2212l-26.37927,68.6583-.86843-.33363a28.62983,28.62983,0,0,1-16.45712-36.99049l.00065-.0017,16.1117-41.93409Z'
				transform='translate(-275.5 -150.1205)' fill={darkModeContrast} />
			<path
				d='M554.5748,412.11239l-37.48819,3.51-1.85977,111.54244A20.99636,20.99636,0,0,0,537.58,546.21066l23.76826-1.63735Z'
				transform='translate(-275.5 -150.1205)'
				// left back
				fill={contrastWhite} />
			<path
				d='M686.73732,406.62241l-25.65071-.33008L659.56706,538.828h0a41.28135,41.28135,0,0,0,42.62677-42.85419Z'
				transform='translate(-275.5 -150.1205)'
				// right back
				fill={contrastWhite} />
			<path
				d='M537.9007,585.91181a81.594,81.594,0,0,1-2.63861,11.35858c-1.29438,3.63971-3.29273,7.00567-4.4762,10.68292-3.7724,11.72137,1.45728,24.79034,9.80988,33.83771a55.2169,55.2169,0,0,0,26.92126,15.9859c7.53516,1.89514,15.37,2.16791,23.13532,2.43121,21.50268.72919,43.55865,1.38153,63.93371-5.52887a111.0851,111.0851,0,0,0,18.57465-8.43835,13.90663,13.90663,0,0,0,4.8197-3.795c1.554-2.2124,1.75281-5.08172,1.73926-7.78533-.04572-9.11554-1.89374-18.18464-1.455-27.28974.243-5.04333,1.18689-10.0827.72229-15.11047a27.87563,27.87563,0,0,0-21.30395-24.01209c-5.78-1.24121-11.775-.56488-17.65955.001a450.25524,450.25524,0,0,1-45.95953,2.055c-15.67853-.1001-31.26026-2.49341-46.86072-2.74334-4.61353-.07392-4.52033,1.34838-5.98908,5.81341A108.76642,108.76642,0,0,0,537.9007,585.91181Z'
				transform='translate(-275.5 -150.1205)' fill={darkModeContrast} />
			<path
				d='M476.592,578.50318a46.39172,46.39172,0,0,0-12.90469-1.37183,32.20814,32.20814,0,0,0-29.90213,37.96857,54.09812,54.09812,0,0,0,5.11352,13.9732c3.42237,6.94525,7.527,13.87464,13.86267,18.32532,3.70621,2.60358,7.99567,4.22681,12.2342,5.82355l33.36868,12.57055c4.9089,1.84925,9.81854,3.69879,14.77606,5.41358a289.01825,289.01825,0,0,0,77.17719,15.343c8.01239.47711,16.14611.60986,23.9627-1.21424,1.85492-.43286,3.83362-1.07818,4.90754-2.6513a8.40493,8.40493,0,0,0,1.09649-3.62171l2.05335-14.37463c.28912-2.024.56732-4.15448-.1745-6.05969-.94062-2.41584-3.2984-3.93555-5.54651-5.22675-21.93756-12.59985-47.55231-19.55109-66.01746-36.84418-4.347-4.071-7.98474-10.52411-13.26629-13.28949-5.9892-3.13592-13.04264-4.92572-19.23331-7.81543C504.56586,589.1344,491.25977,581.87488,476.592,578.50318Z'
				transform='translate(-275.5 -150.1205)' fill={darkModeContrast} />
			<path
				d='M509.90573,597.88227c11.79444,3.69573,61.59055,29.3001,70.12577,38.2398-1.14405.41217-39.961-21.34143-41.1258-21.691-10.58758-3.17755-21.234-6.376-31.28845-11.02618-2.02267-.93549-13.14053-5.33258-12.637-7.88464C495.5484,592.64044,507.81192,597.2262,509.90573,597.88227Z'
				transform='translate(-275.5 -150.1205)'
				opacity='0.1'
			/>
			<path
				d='M581.08661,374.62206l-31.7559,24.1117s-33.50864,1.04831-32.37637,22.46848,14.54325,122.8375,14.54325,122.8375l2.90972,34.89548,55.19288,15.72646a180.58806,180.58806,0,0,0,91.48638,1.96074l0,0-6.559-35.00787s26.559-158.99213,10.559-165.99213-26-5-26-5l-20.05517-17.50036Z'
				transform='translate(-275.5 -150.1205)'
				// shirt
				fill={contrastWhite} />
			<path
				d='M675.08661,335.67579c0,31.3011-28.94285,26.56671-64.64567,26.56671s-64.64566,4.73439-64.64566-26.56671,14.13785-86.7846,64.64566-86.7846C662.68881,248.89119,675.08661,304.37469,675.08661,335.67579Z'
				transform='translate(-275.5 -150.1205)' fill={darkModeContrast} />
			<circle cx='613.28588' cy='315.52409' r='43.50039'
							transform='translate(-318.98195 375.95297) rotate(-45)'
							fill='#ffb7b7'
			/>
			<path
				d='M559.96419,314.42237v0h17.20523l7.59037-21.25337,1.51773,21.25337h8.2234l4.42778-12.3978.88556,12.3978H660.9177v0a46.04892,46.04892,0,0,0-46.04892-46.04892h-8.85567A46.04892,46.04892,0,0,0,559.96419,314.42237Z'
				transform='translate(-275.5 -150.1205)' fill={darkModeContrast} />
			<rect x='291.58661' y='229.50155' width='87' height='105'
						fill={primaryColor.colorWithShade}
			/>
			<polygon
				points='296.381 527.602 304.563 548.895 390.587 527.472 378.512 496.045 296.381 527.602'
				fill='#ffb7b7'
			/>
			<path
				d='M576.74681,669.61959l16.1117,41.93409.00065.0017A28.62983,28.62983,0,0,1,576.402,748.54587l-.86843.33363-26.37927-68.6583Z'
				transform='translate(-275.5 -150.1205)' fill={darkModeContrast} />
			<path
				d='M743.83466,570.35279a60.05871,60.05871,0,0,1,21.157-1.4455c5.65607.62311,11.48358,2.197,15.61316,6.11182,5.02631,4.76495,6.64123,12.134,6.776,19.05865a59.54347,59.54347,0,0,1-12.94183,38.027,34.50491,34.50491,0,0,1-7.39917,7.12286,48.70194,48.70194,0,0,1-9.62671,4.63916L682.6853,673.34162c-19.65924,7.75421-39.38787,15.53082-59.89349,20.64276a4.66789,4.66789,0,0,1-6.233-2.17438q-.02463-.05109-.0481-.10284a154.818,154.818,0,0,1-16.37823-29.96009,2.01888,2.01888,0,0,1,.89227-3.18316l52.85559-30.36921c3.786-2.17535,7.61432-4.382,10.758-7.41241a26.70836,26.70836,0,0,0,5.52325-7.68945c1.09558-2.28839,1.19782-7.68866,2.59729-9.38013,1.37018-1.65607,6.05738-1.78827,8.22217-2.43964a74.60152,74.60152,0,0,0,8.95105-3.38366c11.82337-5.28943,22.35193-12.97461,33.68628-19.168A86.43226,86.43226,0,0,1,743.83466,570.35279Z'
				transform='translate(-275.5 -150.1205)' fill={darkModeContrast} />
			<path
				d='M713.87024,593.03235c-9.08075,6.82031-20.83874,13.08972-29.83874,20.08972-3.0716,2.389-54.276,31.17664-55,35,8.39648,1.41474,61.883-36.00305,69.53552-39.73675s14.43634-8.999,21.15845-14.22547c1.71307-1.33191,8.97308-5.33587,4.05535-6.824C721.01056,586.49756,715.91547,591.66889,713.87024,593.03235Z'
				transform='translate(-275.5 -150.1205)'
				opacity='0.1'
			/>
			// circles
			<circle cx='601.58674' cy='148.46737' r='31.2479' fill={contrastWhite} />
			<circle cx='543.75482' cy='163.39174' r='21.92017' fill={contrastWhite} />
			<circle cx='142.21332' cy='153.43677' r='17.57602' fill={contrastWhite} />
			<circle cx='171.15045' cy='170.50225' r='12.32945' fill={contrastWhite} />
			<circle cx='341.65358' cy='13.43526' r='13.43527' fill={contrastWhite} />
			<path
				d='M537.08661,446.62241l1.20092-9.27026s44.79908,3.27026,37.79908,14.27026-24,12-24,12Z'
				transform='translate(-275.5 -150.1205)' fill={darkModeContrast}
				opacity='0.17' />
			<path
				d='M570.90258,406.315a17.49045,17.49045,0,0,1,12.72474,7.81319h0a17.47438,17.47438,0,0,1-5.68285,24.56288,16.84556,16.84556,0,0,1-2.31559,1.13819l-27.53627,84.22754a13.98942,13.98942,0,1,1-25.1558-12.24654l29.284-83.29253A17.455,17.455,0,0,1,570.90258,406.315Z'
				transform='translate(-275.5 -150.1205)' fill='#ffb7b7' />
			<path
				d='M537.49759,438.1421s15.778,26.95734,38.589,13.48031l-22.10668,84.59843h-18.6256l-19.26772-3.59843,5.39489-34.95275Z'
				transform='translate(-275.5 -150.1205)'
				// left sleeve
				fill={contrastWhite} />
			<path
				d='M650.15748,456.5673l-13.07087-17.94489s6.28217-18.613,30.64108-11.80648C667.72769,426.81593,683.22835,461.51218,650.15748,456.5673Z'
				transform='translate(-275.5 -150.1205)' fill={contrastWhite} />
			<path
				d='M650.15748,456.5673l-13.07087-17.94489s6.28217-18.613,30.64108-11.80648C667.72769,426.81593,683.22835,461.51218,650.15748,456.5673Z'
				transform='translate(-275.5 -150.1205)' fill={darkModeContrast}
				opacity='0.17' />
			<path
				d='M653.61821,393.87118a17.35928,17.35928,0,0,1,9.33417,20.64659l29.284,83.29253a13.98943,13.98943,0,1,1-25.15581,12.24654L639.54435,425.8293a16.84627,16.84627,0,0,1-2.3156-1.13819,17.4744,17.4744,0,0,1-5.68285-24.56288h0a17.49047,17.49047,0,0,1,12.72474-7.81319A17.27631,17.27631,0,0,1,653.61821,393.87118Z'
				transform='translate(-275.5 -150.1205)' fill='#ffb7b7' />
			<path
				d='M637.08661,438.62241s21.56566,13.08548,30.64108-11.80648L698.11646,506.83l-9.02985,15.79237-1.30586.10887A33.39675,33.39675,0,0,1,659.19686,510.645l0,0a66.34381,66.34381,0,0,1-13.85963-29.4748Z'
				transform='translate(-275.5 -150.1205)'
				// right sleeve
				fill={contrastWhite} />
		</motion.svg>
	);
};

export default Illustration;
