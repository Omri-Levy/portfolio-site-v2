import {makeStyles} from '../../deps';

const useStyles = makeStyles((theme) => ({
    menuList: {
        backgroundColor: '#3e96ff'
    },
    menuItem: {
        backgroundColor: '#222831',
        borderBottom: '1px solid #eee',
        '&:nth-child(1)': {
            borderTop: '1px solid #eee',
            borderBottom: '1px solid #eee'
        }
    }
}));

export default useStyles;
