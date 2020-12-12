import {makeStyles} from '../../deps';

const useStyles = makeStyles((theme) => ({
    content: {
        [theme.breakpoints.up('md')]: {
            width: 1000,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }
    }
}));

export default useStyles;
