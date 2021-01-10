import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Grid, TextField } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import React, {
	FormEvent,
	RefObject,
	useContext,
	useRef,
	useState,
} from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm } from 'react-hook-form';
import { useIntl } from 'react-intl';
import { ButtonLink } from '~/components/ButtonLink';
import { TranslateText } from '~/components/Layout/Locales/TranslateText';
import FormInputProps from '~/components/pages/ContactMe/ContactMeForm/formInputProps/formInputProps';
import { ThemeContext } from '~/context/ThemeProvider';
import { Key } from '~/utils/types';
import { validationSchema } from '../validationSchema';
import { FormInputs } from './types';
import useStyles from './useStyles';

const ContactMeForm: React.FunctionComponent = () => {
	const classes = useStyles();
	const { isRTL, isDarkMode } = useContext(ThemeContext);
	const [isRobot, setIsRobot] = useState(true);
	const [isLoading, setIsLoading] = useState(false);
	const { register, errors, handleSubmit } = useForm<FormInputs>({
		resolver: yupResolver(validationSchema),
	});
	const [displayAlert, setDisplayAlert] = useState(false);
	const [alertMessage, setAlertMessage] = useState(``);
	type AlertSeverity = `success` | `error` | `warning` | `info` | undefined;
	const [alertSeverity, setAlertSeverity] = useState<AlertSeverity>(undefined);
	const intl = useIntl();
	const recaptcha = useRef<{ getValue: () => string }>();
	const formInputProps = new FormInputProps(register);
	const encode = (data: Record<Key, string>) => {
		return Object.keys(data)
			.map(
				(key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`,
			)
			.join(`&`);
	};
	const handleChange = () => setIsRobot(false);
	const onCooldown = () => {
		const isOnCooldown =
			JSON.parse(localStorage.getItem(`ec`) as string) || false;

		if (isOnCooldown) {
			setDisplayAlert(true);
			setAlertMessage(intl.formatMessage({ id: `cooldown` }));
			setAlertSeverity(`warning`);

			return true;
		}

		return false;
	};
	const onRobot = () => {
		if (isRobot) {
			setDisplayAlert(true);
			setAlertMessage(intl.formatMessage({ id: `robot` }));
			setAlertSeverity(`warning`);

			return true;
		}

		return false;
	};
	const onSuccess = () => {
		setAlertMessage(intl.formatMessage({ id: `success` }));
		setAlertSeverity(`success`);
		localStorage.setItem(`ec`, JSON.stringify(true));
		setTimeout(() => localStorage.setItem(`ec`, JSON.stringify(false)), 300000);
	};
	const onError = () => {
		setAlertMessage(intl.formatMessage({ id: `error` }));
		setAlertSeverity(`error`);
	};
	const onSubmit = async (
		data: Record<Key, string>,
		event: FormEvent<HTMLFormElement>,
	) => {
		event.preventDefault();

		if (onCooldown()) {
			return;
		}

		if (onRobot()) {
			return;
		}

		setIsLoading(true);

		const request = {
			method: `POST`,
			headers: { 'Content-Type': `application/x-www-form-urlencoded` },
			body: encode({
				'form-name': `contact`,
				'g-recaptcha-response': (await recaptcha.current?.getValue()) as string,
				...data,
			}),
		};

		fetch(`/`, request)
			.then(() => onSuccess())
			.catch(() => onError());

		setIsLoading(false);
	};

	return (
		<Box className={classes.contactMeFormContainer}>
			<form
				name={`contact`}
				className={classes.form}
				netlify-honeypot={`bot-field`}
				data-netlify={`true`}
				data-netlify-recaptcha={`true`}
				id={`contact-me-form`}
				method={`POST`}
				onSubmit={handleSubmit(onSubmit)}
			>
				<input type={`hidden`} name={`form-name`} value={`contact`} />
				<input type={`hidden`} name={`bot-field`} />
				<noscript>
					<p>This form won’t work with Javascript disabled</p>
				</noscript>
				<Grid container className={classes.formGridContainer}>
					<Grid item className={classes.fullNameGridItem}>
						<TextField
							autoFocus
							name={`fullName`}
							variant={`outlined`}
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
							variant={`outlined`}
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
							variant={`outlined`}
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
					{displayAlert && (
						<Alert
							variant={`outlined`}
							severity={alertSeverity}
							onClose={() => setDisplayAlert(false)}
							style={{
								width: `100%`,
								marginBottom: 10,
							}}
						>
							{alertMessage}
						</Alert>
					)}
				</Grid>
				<ReCAPTCHA
					ref={recaptcha as RefObject<ReCAPTCHA>}
					sitekey={process.env.SITE_RECAPTCHA_KEY as string}
					theme={isDarkMode ? `dark` : `light`}
					hl={isRTL ? `iw` : `en`}
					onChange={handleChange}
				/>
			</form>
		</Box>
	);
};

export default ContactMeForm;
