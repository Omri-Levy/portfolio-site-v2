import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	listItem: {
		minWidth: 80,
	},
	icon: {
		color: theme.palette.text.primary,
	},
	link: {
		display: `flex`,
		flexDirection: `column`,
		alignItems: `center`,
		color: theme.palette.text.primary,
		fontSize: 13,
		fontWeight: 400,
		textDecoration: `none`,
		'&:hover': {
			textDecoration: `none`,
		},
		marginRight: 23,
		'&:last-child': {
			marginRight: 0,
		},
		'&::after': {
			// eslint-disable-next-line
			content: '""',
			width: 0,
			transition: `width 0.3s ease-in-out`,
			height: 3,
			background: theme.palette.text.primary,
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
			background: theme.palette.text.primary,
		},
	},
}));

export default useStyles;
