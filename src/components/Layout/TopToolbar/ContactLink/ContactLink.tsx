import {IconButton} from 'gatsby-theme-material-ui';
import React from 'react';
import {Props} from './types';
import useStyles from './useStyles';

const ContactLink: React.FunctionComponent<Props> = ({Icon, to}) => {
    const classes = useStyles();

    return (
        <IconButton
            className={classes.button}
            to={to}
            // @ts-ignore
            target={'_blank'}
            style={{backgroundColor: 'transparent'}}
            disableFocusRipple
        >
            <Icon className={classes.icon}/>
        </IconButton>
    );
};

export default ContactLink;

