import { makeStyles } from '@material-ui/core/styles';
import getCustomBreakpoints from '../../../../utils/getCustomBreakpoints';

const useStyles = makeStyles((theme) => ({
	burgerMenuContainer: {
		zIndex: 1101,
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
			display: `block`,
			position: `relative`,
			width: `100%`,
			height: 4,
			backgroundColor: theme.palette.primary.main,
			borderRadius: 5,
			'&:before, &:after': {
				borderRadius: 5,
				left: 0,
				position: `absolute`,
				content: `""`,
				width: `100%`,
				height: 4,
				backgroundColor: theme.palette.primary.main,
			},
			'&:before': {
				top: 9,
			},
			'&:after': {
				top: 18,
			},
		},
		'& input': {
			zIndex: 1102,
			cursor: `pointer`,
			position: `absolute`,
			opacity: 0,
			width: 48,
			height: 48,
			top: 0,
			left: 0,
			bottom: 0,
			right: 0,
		},
	},
	burgerMenuContainerOpen: {
		border: `1px solid ${theme.palette.secondary.dark}`,
		'& span': {
			backgroundColor: theme.palette.secondary.dark,
			'&:before, &:after': {
				backgroundColor: theme.palette.secondary.dark,
			},
		},
	},
}));

export default useStyles;
