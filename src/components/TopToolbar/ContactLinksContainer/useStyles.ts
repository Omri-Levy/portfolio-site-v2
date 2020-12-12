import {DefaultTheme} from '@material-ui/styles';
import {makeStyles} from '../../../deps';

const useStyles = makeStyles((theme: DefaultTheme) => ({
    box: {
        [theme.breakpoints.up('md')]: {
            marginBottom: 15
        }
    }
}));

export default useStyles;
