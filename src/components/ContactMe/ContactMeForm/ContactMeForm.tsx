import {yupResolver} from '@hookform/resolvers/yup';
import {Box, Grid, TextField} from '@material-ui/core';
import {init, send} from 'emailjs-com';
import {useForm} from 'react-hook-form';
import {makeStyles, React} from '../../../deps';
import {SecondaryButton} from '../../SecondaryButton';
import {validationSchema} from '../validationSchema';
import {
    inputProps,
    labelStyle,
    fullNameProps,
    emailProps,
    messageProps
} from './props';
import styles from './styles';
import {Data, FormInputs} from './types';

const ContactMeForm: React.FC = () => {
    init('user_VCUWzf1n5yq07YDWAJoZH');
    const useStyles = makeStyles(styles);
    const classes = useStyles();
    const {register, errors, handleSubmit} = useForm<FormInputs>({
        resolver: yupResolver(validationSchema)
    });
    inputProps.ref = register as any;

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
        <Box className={classes.box}>
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
                <Grid
                    container item
                    direction={'column'}
                    alignItems={'flex-end'}
                >
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
