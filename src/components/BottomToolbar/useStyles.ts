import {makeStyles} from '../../deps';

const useStyles = makeStyles((theme) => ({
    bottomToolbarContainer: {
        width: '100vw',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'fixed',
        height: 59,
        bottom: 59,
        left: 0,
        [theme.breakpoints.up('md')]: {
            bottom: 0
        }
    },
    innerBox: {
        display: 'flex'
    }
}));

export default useStyles;
