import { fade } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import getCustomBreakpoints from '~/utils/getCustomBreakpoints/getCustomBreakpoints';

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
	carouselBackButton: {
		backgroundColor: `transparent`,
		border: `none`,
		position: `absolute`,
		top: `calc(50% - 24px)`,
		left: 0,
	},
	carouselNextButton: {
		backgroundColor: `transparent`,
		border: `none`,
		position: `absolute`,
		top: `calc(50% - 24px)`,
		right: 0,
	},
	imageContainer: {
		position: `relative`,
		marginInline: `auto`,
		width: `min(100%, 600px)`,
	},
	buttonsContainer: {
		display: `flex`,
		justifyContent: `space-between`,
		margin: `20px 64px`,
		[getCustomBreakpoints(`md`, theme, `down`)]: {
			margin: `10px 64px`,
		},
		[getCustomBreakpoints(`xs`, theme, `down`)]: {
			margin: `10px 24px`,
		},
		[`@media (max-width:1000px) and (min-width:770px)`]: {
			margin: `10px 177px`,
		},
	},
}));

export default useStyles;
