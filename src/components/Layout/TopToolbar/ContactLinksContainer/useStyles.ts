import {makeStyles} from 'src/deps';

const useStyles = makeStyles((theme) => ({
    box: {
        [theme.breakpoints.up('md')]: {
            marginBottom: 15
        }
    }
}));

export default useStyles;
