import {graphql, useStaticQuery} from 'gatsby';
import Img from 'gatsby-image';
import {React} from 'src/deps';
import useStyles from './useStyles';

const ProfilePic = () => {
    const classes = useStyles();
	const data = useStaticQuery(graphql`
        query profilePic {
            image: file(relativePath: { eq: "profilePic.png" }) {
                childImageSharp {
                    fluid(maxWidth: 180, maxHeight: 180) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `);

    return (
        <Img
            fluid={data.image.childImageSharp.fluid}
            alt='Omri Levy'
            className={classes.profilePic}
        />
    );
};

export default ProfilePic;
