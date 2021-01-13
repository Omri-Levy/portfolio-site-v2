import { makeStyles } from '@material-ui/core/styles';
import { getCustomBreakpoints } from '~/utils/getCustomBreakpoints';

const useStyles = makeStyles((theme) => ({
	listItem: {
		display: `flex`,
		justifyContent: `center`,
		minWidth: theme.direction === `rtl` ? 60 : 80,
	},
	icon: {
		color: theme.palette.secondary.dark,
		[getCustomBreakpoints(`md`, theme, `up`)]: {
			color: theme.palette.text.secondary,
		},
	},
	link: {
		display: `flex`,
		flexDirection: `column`,
		alignItems: `center`,
		color: theme.palette.secondary.dark,
		fontSize: 18,
		fontWeight: 400,
		[getCustomBreakpoints(`md`, theme, `up`)]: {
			color: theme.palette.text.secondary,
			fontSize: 13,
		},
		textDecoration: `none`,
		'&:hover': {
			textDecoration: `none`,
		},
	},
	activeLink: {

	},
}));

export default useStyles;
