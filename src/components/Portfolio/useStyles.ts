import {makeStyles} from '../../deps';

const useStyles = makeStyles((theme) => ({
    portfolioContainer: {
        [theme.breakpoints.down('sm')]: {
            height: '100vh'
        }
    }
}));

export default useStyles;
