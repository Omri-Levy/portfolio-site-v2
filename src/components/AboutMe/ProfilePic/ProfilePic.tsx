import {graphql, useStaticQuery} from 'gatsby';
import Img from 'gatsby-image';
import {makeStyles, React} from '../../../deps';
import styles from './styles';

const ProfilePic = () => {
    const useStyles = makeStyles(styles);
    const classes = useStyles();
	const data = useStaticQuery(graphql`
        query profilePic {
            image: file(relativePath: { eq: "profilePic.png" }) {
                childImageSharp {
                    fixed(
                        width: 124,
                        height: 124,
                    ) {
                        ...GatsbyImageSharpFixed_withWebp
                    }
                }
            }
        }
    `);

    return (
        <Img
            fixed={data.image.childImageSharp.fixed}
            alt='Omri Levy'
            className={classes.profilePic}
        />
    );
};

export default ProfilePic;
