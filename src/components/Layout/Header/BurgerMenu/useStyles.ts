import { makeStyles } from '@material-ui/core/styles';
import getCustomBreakpoints from '../../../../utils/getCustomBreakpoints';

const useStyles = makeStyles((theme) => ({
	burgerMenuContainer: {
		backgroundColor: `transparent`,
		display: `flex`,
		flexDirection: `column`,
		alignItems: `center`,
		cursor: `pointer`,
		zIndex: 1105,
		position: `fixed`,
		borderRadius: `100vh`,
		padding: `.75rem .65rem`,
		width: 48,
		height: 48,
		bottom: 10,
		right: 20,
		border: `1px solid ${theme.palette.primary.main}`,
		[getCustomBreakpoints(`md`, theme, `up`)]: {
			display: `none`,
		},
		'& span': {
			position: `absolute`,
			width: `2em`,
			left: 0,
			'&:nth-child(1)': {
				top: 0,
			},
			'&:nth-child(2)': {
				top: 8,
			},
			'&:nth-child(3)': {
				top: 16,
			},
			display: `block`,
			height: 4,
			backgroundColor: theme.palette.primary.main,
			borderRadius: 5,
		},
	},
	burgerLinesContainer: {
		width: `100%`,
		height: `100%`,
		position: `relative`,
	},
}));

export default useStyles;
