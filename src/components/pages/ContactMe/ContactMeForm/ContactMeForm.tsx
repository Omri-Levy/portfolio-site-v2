import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Grid, TextField } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { useForm } from 'react-hook-form';
import { TranslateText } from '~/components/Layout/Locales/TranslateText';
import { validationSchema } from '../validationSchema';
import { FormInputs } from './types';
import useStyles from './useStyles';
import React, { useContext, useRef, useState } from 'react';
import { ButtonLink } from '~/components/ButtonLink';
import { useFetchState } from '~/hooks/useFetchState';
import FormInputProps from '~/components/pages/ContactMe/ContactMeForm/formInputProps/formInputProps';
import ReCAPTCHA from 'react-google-recaptcha';
import { ThemeContext } from '~/context/ThemeContext';
import { sendEmail } from '~/components/pages/ContactMe/ContactMeForm/sendEmail';
import { resetFetchState } from '~/hooks/useFetchState/resetFetchState';
import { handleRecaptcha } from '~/components/pages/ContactMe/ContactMeForm/handleRecaptcha';

const ContactMeForm: React.FunctionComponent = () => {
	const {
		setFetchState,
		fetchState,
		isLoading,
		severity,
		shouldDisplayAlert,
		alertMessage,
	} = useFetchState({});

	const classes = useStyles();
	const { register, errors, handleSubmit } = useForm<FormInputs>({
		resolver: yupResolver(validationSchema),
	});
	const formInputProps = new FormInputProps(register);
	const { isDarkMode, isRTL } = useContext(ThemeContext);
	const [isRobot, setIsRobot] = useState(true);
	const recaptchaValue = useRef({});
	const recaptcha = useRef();

	return (
		<Box className={classes.contactMeFormContainer}>
			<form
				name={`contact-recaptcha`}
				className={classes.form}
				onSubmit={handleSubmit(sendEmail(setFetchState, isRobot))}
				netlify-honeypot={`bot-field`}
				data-netlify={`true`}
				data-netlify-recaptcha={`true`}
				method={`post`}
			>
				<noscript>
					<p>This form won’t work with Javascript disabled</p>
				</noscript>
				<Grid container className={classes.formGridContainer}>
					<Grid item className={classes.fullNameGridItem}>
						<TextField
							autoFocus
							name={`fullName`}
							variant={`filled`}
							label={<TranslateText text={`Full Name`} />}
							id={`full-name`}
							className={classes.fullName}
							inputProps={formInputProps.setMaxLength(70)}
							error={!!errors.fullName}
							helperText={errors.fullName?.message}
							required
						/>
					</Grid>
					<Grid item className={classes.emailGridItem}>
						<TextField
							name={`email`}
							variant={`filled`}
							label={<TranslateText text={`Email`} />}
							id={`email`}
							className={classes.email}
							inputProps={formInputProps.setMaxLength(125)}
							error={!!errors.email}
							helperText={errors.email?.message}
							required
						/>
					</Grid>
				</Grid>
				<Grid container item>
					<Grid item className={classes.messageGridItem}>
						<TextField
							name={`message`}
							variant={`filled`}
							label={<TranslateText text={`Message`} />}
							id={`message`}
							className={classes.message}
							inputProps={formInputProps.setMaxLength(640)}
							error={!!errors.message}
							helperText={errors.message?.message}
							multiline
							required
						/>
					</Grid>
					<Grid container item justify={`flex-end`}>
						<ButtonLink
							type={`submit`}
							variant={`secondary`}
							text={`Send`}
							additionalClass={classes.sendButton}
							disabled={isLoading}
						/>
					</Grid>
					{shouldDisplayAlert && (
						<Alert
							// eslint-disable-next-line @typescript-eslint/ban-ts-comment
							// @ts-ignore
							severity={severity}
							onClose={resetFetchState(setFetchState, fetchState)}
							style={{
								width: `100%`,
								marginBottom: 10,
							}}
							size={`small`}
						>
							{alertMessage}
						</Alert>
					)}
				</Grid>
				<ReCAPTCHA
					ref={recaptcha.current}
					sitekey={process.env.RECAPTCHA_KEY || ``}
					theme={isDarkMode ? `dark` : `light`}
					hl={isRTL ? `iw` : `en`}
					onChange={handleRecaptcha(setIsRobot, recaptchaValue)}
				/>
			</form>
		</Box>
	);
};

export default ContactMeForm;
