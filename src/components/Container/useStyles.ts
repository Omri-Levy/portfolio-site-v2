import {DefaultTheme} from '@material-ui/styles';
import {makeStyles} from '../../deps';

const useStyles = makeStyles((theme: DefaultTheme) => ({
    mainContainer: {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        [theme.breakpoints.up('md')]: {
            textAlign: 'left'
        },
        padding: 0,
        margin: 0
    }
}));

export default useStyles;
