import { fade } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import getCustomBreakpoints from '~/utils/getCustomBreakpoints/getCustomBreakpoints';

const useStyles = makeStyles((theme) => ({
	icon: {
		color: theme.palette.primary.contrastText,
		width: 48,
		height: 48,
	},
	projectCardContainer: {
		borderRadius: 5,
		border: `1px solid ${theme.palette.primary.main}`,
		marginBottom: 53,
		height: 500,
		padding: 10,

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
		borderRadius: 5,
		backgroundColor: theme.palette.primary.main,
		width: `min(600px, 100%)`,
		height: 250,
		marginLeft: `auto`,
	},
	image: {
		borderRadius: 5,
		width: `100%`,
		height: `100%`,
	},
	buttonsContainer: {
		display: `flex`,
		justifyContent: `space-between`,
		margin: `20px 64px`,
		width: `100%`,
		[getCustomBreakpoints(`md`, theme, `up`)]: {
			margin: `20px 0`,
			width: 245,
		},
	},
}));

export default useStyles;
