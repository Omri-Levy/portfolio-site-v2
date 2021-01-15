import { fade } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import getCustomBreakpoints from '../../../../utils/getCustomBreakpoints';

const useStyles = makeStyles((theme) => ({
	arrowIcon: {
		color: theme.palette.primary.contrastText,
		width: 48,
		height: 48,
	},
	innerBox: {
		display: `flex`,
		flexDirection: `column`,
		alignItems: `center`,
		'& h2': {
			marginBottom: 5,
		},
		'& .MuiList': {
			'&-padding': {
				padding: 0,
				minHeight: 200,
				maxHeight: 200,
				maxWidth: 600,
				[getCustomBreakpoints(`lg`, theme, `up`)]: {
					minHeight: `unset`,
					maxHeight: `unset`,
				},
				[getCustomBreakpoints(`xs`, theme, `down`)]: {
					minHeight: 235,
					maxHeight: 235,
				},
			},
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
			minWidth: 25,
			'& .MuiSvgIcon-root': {
				width: 17,
				height: 17,
			},
		},
		'& .MuiListItemText': {
			'&-root': {
				marginTop: 0,
				marginBottom: 0,
			},
			'&-primary': {
				color: theme.palette.text.primary,
				fontSize: 12,
				fontWeight: 400,
				minWidth: 335,
				maxWidth: 335,
				[getCustomBreakpoints(`lg`, theme, `up`)]: {
					fontSize: 16,
				},
				[getCustomBreakpoints(`md`, theme, `down`)]: {
					minWidth: `85vw`,
					maxWidth: `85vw`,
				},
			},
		},
	},
	title: {
		display: `flex`,
		alignItems: `center`,
		justifyContent: `center`,
		fontSize: 16,
		fontWeight: 500,
		marginBottom: 26,
	},
	body: {
		fontSize: 12,
		fontWeight: 400,
		marginBottom: 9,
		minWidth: 231,
		maxWidth: 231,
	},
	carouselButton: {
		backgroundColor: `transparent`,
		border: `none`,
	},
	imageContainer: {
		borderRadius: 5,
		position: `relative`,
		marginInline: `auto`,
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.text.secondary,
		width: `min(600px, 100%)`,
		height: 250,
	},
	image: {
		width: `100%`,
		height: `100%`,
		borderRadius: 5,
	},
	buttonsContainer: {
		display: `flex`,
		width: `min(600px, 100%)`,
		justifyContent: `space-between`,
		margin: `20px auto`,
		[getCustomBreakpoints(`md`, theme, `down`)]: {
			margin: `10px auto`,
		},
		[`@media (max-width:1000px) and (min-width:770px)`]: {
			margin: `10px auto`,
		},
	},
}));

export default useStyles;
