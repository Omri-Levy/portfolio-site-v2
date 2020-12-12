import {makeStyles} from '../../deps';

const useStyles = makeStyles((theme) => ({
    configContainer: {
        position: 'fixed',
        top: 59,
        right: 0,
        display: 'flex',
        width: '100%',
        height: 59,
        alignItems: 'center',
        justifyContent: 'flex-end',
        margin: '0 17px'
    }
}));

export default useStyles;
