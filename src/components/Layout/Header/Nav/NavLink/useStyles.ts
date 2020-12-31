import { makeStyles } from '@material-ui/core/styles';

const linkProps = {
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
};

const useStyles = makeStyles((theme) => ({
	listItem: {
		display: `flex`,
		flexDirection: `column`,
	},
	icon: {
		color: theme.palette.secondary.light,
	},
	activeIcon: {
		color: theme.palette.secondary.dark,
	},
	link: {
		...linkProps,
		color: theme.palette.secondary.light,
	},
	activeLink: {
		...linkProps,
		color: theme.palette.secondary.dark,
	},
}));

export default useStyles;
