import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	listItem: {
		display: `flex`,
		justifyContent: `center`,
		minWidth: theme.direction === `rtl` ? 60 : 80,
	},
	icon: {
		color: theme.palette.text.secondary,
	},
	link: {
		display: `flex`,
		flexDirection: `column`,
		alignItems: `center`,
		color: theme.palette.text.secondary,
		fontSize: 13,
		fontWeight: 400,
		textDecoration: `none`,
		'&:hover': {
			textDecoration: `none`,
		},
		'&::after': {
			// eslint-disable-next-line
			content: '""',
			width: 0,
			transition: `width 0.3s ease-in-out`,
			height: 3,
			background: theme.palette.text.secondary,
		},
		'&:hover::after': {
			width: `100%`,
			transition: `width 0.3s ease-in-out`,
		},
	},
	activeLink: {
		'&::after': {
			// eslint-disable-next-line
			content: '""',
			width: `100%`,
			transition: `width 0.3s ease-in-out`,
			height: 3,
			background: theme.palette.text.secondary,
		},
	},
}));

export default useStyles;
