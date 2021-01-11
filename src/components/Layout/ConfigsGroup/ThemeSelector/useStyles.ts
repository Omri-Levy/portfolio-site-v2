import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	palette: {
		color: theme.palette.primary.main,
	},
	popover: {
		'& .MuiPaper-rounded': {
			borderRadius: `100vh`,
		},
		'& .MuiPaper-root': {
			borderRadius: `100vh`,
		},
	},
}));

export default useStyles;
