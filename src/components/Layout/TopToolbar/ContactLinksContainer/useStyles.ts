import {DefaultTheme} from '@material-ui/core/styles';
import {makeStyles} from '../../../../deps';

const useStyles = makeStyles((theme) => ({
    box: {
        [theme.breakpoints.up('md')]: {
            marginBottom: 15
        }
    }
}));

export default useStyles;
