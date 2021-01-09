import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	nav: {
		width: `min(250px, 100%)`,

		[`@media (max-width: 360px)`]: {
			width: `100%`,
		},
	},
	menuList: {
		width: `100%`,
		padding: 0,
		display: `flex`,
		justifyContent: `space-between`,
	},
}));

export default useStyles;
