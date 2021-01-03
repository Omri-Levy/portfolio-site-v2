import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	menuList: {
		backgroundColor: theme.palette.primary.main,
	},
	menuItem: {
		backgroundColor: theme.palette.secondary.contrastText,
		color: theme.palette.text.primary,
		borderTop: `1px solid ${theme.palette.text.primary}`,
		borderBottom: `1px solid ${theme.palette.text.primary}`,
		'&:nth-child(1)': {
			borderTop: `1px solid ${theme.palette.text.primary}`,
			borderBottom: `none`,
		},
		'&:hover .MuiTypography-body1': {
			color: theme.palette.secondary.light,
		},
	},
}));

export default useStyles;
