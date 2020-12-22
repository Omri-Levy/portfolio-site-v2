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
		marginBottom: 53,

		[getCustomBreakpoints('md', theme, 'up')]: {
			marginBottom: 30,
		},
	},
	innerBox: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
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
				[getCustomBreakpoints('md', theme, 'up')]: {
					fontSize: 16,
				},
			},
		},
	},
	title: {
		fontSize: 16,
		fontWeight: 500,
		marginBottom: 26,
		[getCustomBreakpoints('md', theme, 'up')]: {
			fontSize: 24,
		},
	},
	imageContainer: {
		marginTop: 4,
	},
	image: {
		paddingLeft: 20,
		paddingRight: 20,
		[getCustomBreakpoints('md', theme, 'up')]: {
			width: 500,
			height: 240,
			marginLeft: 130,
		},
	},
	buttonsContainer: {
		display: 'flex',
		justifyContent: 'space-between',
		margin: '20px 64px',
		[getCustomBreakpoints('md', theme, 'up')]: {
			margin: '24px 0',
			justifyContent: 'flex-start',
		},
	},
	primaryButton: {
		fontSize: 12,
		fontWeight: 500,
		textTransform: 'unset',
		[getCustomBreakpoints('md', theme, 'up')]: {
			marginRight: 44,
			fontSize: 18,
			height: 32,
		},
	},
	secondaryButton: {
		fontSize: 12,
		fontWeight: 500,
		textTransform: 'unset',
		[getCustomBreakpoints('md', theme, 'up')]: {
			fontSize: 18,
			height: 32,
		},
	},
}));

export default useStyles;
