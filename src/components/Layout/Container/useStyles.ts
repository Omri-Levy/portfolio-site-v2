import {makeStyles} from '../../../deps';

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        [theme.breakpoints.up('lg')]: {
            textAlign: 'left',
        },
        padding: 0,
        margin: 0
    }
}));

export default useStyles;
