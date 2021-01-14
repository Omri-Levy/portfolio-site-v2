import { fade } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import getCustomBreakpoints from '../../../../utils/getCustomBreakpoints';

const useStyles = makeStyles((theme) => ({
	icon: {
		color: theme.palette.primary.contrastText,
		width: 48,
		height: 48,
	},
	projectCardContainer: {
		border: `1px solid ${theme.palette.primary.main}`,
		padding: 10,
		height: 450,
		marginBottom: 53,
		borderRadius: 5,

		[getCustomBreakpoints(`md`, theme, `up`)]: {
			marginBottom: 30,
		},
	},
	innerBox: {
		display: `flex`,
		flexDirection: `column`,
		alignItems: `flex-start`,
		'& .MuiList': {
			'&-dense': {
				padding: 0,
			},
		},
		'& .MuiListItem': {
			'&-divider': {
				borderBottom: `1px solid ${fade(
					theme.palette.primary.contrastText,
					0.12,
				)}`,
			},
			'&-gutters': {
				paddingLeft: 0,
				paddingRight: 0,
			},
		},
		'& .MuiListItemIcon-root': {
			color: theme.palette.primary.main,
			minWidth: 35,
		},
		'& .MuiListItemText': {
			'&-primary': {
				color: theme.palette.text.primary,
				fontSize: 12,
				fontWeight: 400,
				minWidth: 335,
				maxWidth: 335,
				[getCustomBreakpoints(`md`, theme, `up`)]: {
					fontSize: 16,
				},
			},
		},
	},
	title: {
		fontSize: 16,
		fontWeight: 500,
		marginBottom: 26,
		[getCustomBreakpoints(`md`, theme, `up`)]: {
			fontSize: 24,
		},
	},
	imageContainer: {
		marginLeft: `auto`,
		marginTop: 4,
		width: 590,
		height: 305,
	},
	image: {
		backgroundColor: theme.palette.primary.main,
		borderRadius: 5,
		color: theme.palette.text.secondary,
		width: `100%`,
		height: `100%`,
	},
	buttonsContainer: {
		display: `flex`,
		justifyContent: `space-between`,
		marginTop: `auto`,
		width: 250,
	},
}));

export default useStyles;
