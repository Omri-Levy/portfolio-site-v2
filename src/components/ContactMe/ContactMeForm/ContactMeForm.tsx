import {yupResolver} from '@hookform/resolvers/yup';
import {Box, Grid, TextField, useMediaQuery} from '@material-ui/core';
import {useTheme} from '@material-ui/styles';
import {init, send} from 'emailjs-com';
import {useForm} from 'react-hook-form';
import {React} from '../../../deps';
import {SecondaryButton} from '../../SecondaryButton';
import {validationSchema} from '../validationSchema';
import {Data, FormInputs} from './types';
import useStyles from './useStyles';

const ContactMeForm: React.FC = () => {
    init('user_VCUWzf1n5yq07YDWAJoZH');
    const theme = useTheme();
    const classes = useStyles();
    const {register, errors, handleSubmit} = useForm<FormInputs>({
        resolver: yupResolver(validationSchema)
    });
    const isDesktop = useMediaQuery(() => (
        theme.breakpoints.up('md')
    ));
    const isXS = useMediaQuery(() => (
        theme.breakpoints.down('xs')
    ));
    let backgroundColor;

    const inputProps = {
        style: {
            color: theme.palette.text.main,
            backgroundColor: theme.palette.accent.primary,
            borderRadius: 5,
            fontSize: isDesktop ? 13 : 11
        },
        ref: register
    };
    const labelStyle = {
        style: {
            fontSize: isDesktop ? 11 : 13
        }
    };
    const messageProps = {
        ...inputProps,
        style: {
            ...inputProps.style,
            height: isXS ? 76 : 106
        },
        maxLength: 640
    };
    const fullNameProps = {
        ...inputProps,
        maxLength: 70
    };
    const emailProps = {
        ...inputProps,
        maxLength: 125
    };

    const onSubmit = async (data: Data) => {
        const templateParams = {
            fullName: data.fullName,
            email: data.email,
            message: data.message
        };
        const email = await send(
            'service_vv503ou',
            'template_40335ln',
            templateParams
        );

        console.log(email);
    };

    return (
        <Box className={classes.contactMeFormContainer}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container>
                    <Grid item>
                        <TextField
                            autoFocus
                            name={'fullName'}
                            variant={'filled'}
                            label={'Full Name'}
                            id={'full-name'}
                            className={classes.fullName}
                            FormHelperTextProps={labelStyle}
                            InputLabelProps={labelStyle}
                            inputProps={fullNameProps}
                            error={!!errors.fullName}
                            helperText={errors.fullName?.message}
                            required
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            name={'email'}
                            variant={'filled'}
                            label={'Email'}
                            id={'email'}
                            className={classes.email}
                            FormHelperTextProps={labelStyle}
                            InputLabelProps={labelStyle}
                            inputProps={emailProps}
                            error={!!errors.email}
                            helperText={errors.email?.message}
                            required
                        />
                    </Grid>
                </Grid>
                <Grid container item direction={'column'}
                      alignItems={'flex-end'}>
                    <Grid item>
                        <TextField
                            name={'message'}
                            variant={'filled'}
                            label={'Message'}
                            id={'message'}
                            className={classes.message}
                            FormHelperTextProps={labelStyle}
                            InputLabelProps={labelStyle}
                            inputProps={messageProps}
                            error={!!errors.message}
                            helperText={errors.message?.message}
                            multiline
                            required
                        />
                    </Grid>
                    <Grid item>
                        <SecondaryButton
                            type='submit'
                            text={'Send'}
                            className={classes.button}
                        />
                    </Grid>
                </Grid>
            </form>
        </Box>
    );
};

export default ContactMeForm;
