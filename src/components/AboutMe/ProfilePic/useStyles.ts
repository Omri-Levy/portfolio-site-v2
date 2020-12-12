import {makeStyles} from '../../../deps';

const useStyles = makeStyles((theme) => ({
  profilePic: {
    borderRadius: '100vh',
    marginBottom: 13,
    width: 124,
    height: 124,
    [theme.breakpoints.up('md')]: {
      width: 180,
      height: 180,
      float: 'right',
      marginTop: 1,
      marginRight: 25,
    },
  },
}));

export default useStyles;
