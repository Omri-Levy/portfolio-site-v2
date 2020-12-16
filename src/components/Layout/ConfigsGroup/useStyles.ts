import {makeStyles} from 'src/deps';

const useStyles = makeStyles((theme) => ({
    bottomConfigContainer: {
        display: 'flex',
        alignItems: 'center',
        height: 59,
        padding: '0 20px',
    },
    topConfigContainer: {
        extend: 'bottomConfigContainer',
        alignItems: 'center',
        position: 'fixed',
        height: 59,
        top: 59,
        left: 0,
    }
}));

export default useStyles;
