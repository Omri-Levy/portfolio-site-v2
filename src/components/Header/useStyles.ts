import {DefaultTheme} from '@material-ui/styles';
import {makeStyles} from '../../deps';

const useStyles = makeStyles((theme: DefaultTheme) => ({
    appBar: {
        display: 'flex',
        justifyContent: 'center',
        top: 'unset',
        bottom: 0,
        margin: 0,
        height: 59,
        padding: '0 19px',
        [theme.breakpoints.up('md')]: {
            top: 0,
            padding: '0 37px'
        }
    },
    box: {
        display: 'flex',
        justifyContent: 'space-between',
        ['@media (max-width: 350px)']: {
            justifyContent: 'center'
        },
        margin: 0,
        padding: 0
    }
}));

export default useStyles;
