import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, TextField } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import React, { FormEvent, RefObject, useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { Controller, useForm } from 'react-hook-form';
import { useIntl } from 'react-intl';
import { Key } from '../../../../utils/types';
import TranslateText from '../../../Layout/Locales/TranslateText';
import validationSchema from '../validationSchema';
import { FormInputs } from './types';
import { Send } from '@material-ui/icons';
import useThemeContext from '../../../../context/ThemeProvider/useThemeContext';
import styled, { css } from 'styled-components';
import getCustomBreakpoints from '../../../../utils/getCustomBreakpoints';

const StyledGridContainer = styled(Box)(({ theme }) => {
	const mdDown = getCustomBreakpoints(`md`, `down`);

	return css`
    grid-template-columns: minmax(53%, 500px);
    justify-content: center;
    display: grid;
    gap: ${theme.spacing(0.1)}em;

    ${mdDown} {
      grid-template-columns: 1fr;
    }
	`;
});
const StyledGridItem = styled(Box)(({ theme }) => {
	const mdDown = getCustomBreakpoints(`md`, `down`);

	return css`

	`;
});
const StyledFirstRow = styled(Box)(({ theme }) => {
	const mdDown = getCustomBreakpoints(`md`, `down`);

	return css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${theme.spacing(0.1)}em;

    ${mdDown} {
      grid-template-columns: 1fr;
    }
	`;
});
const StyledSubmitContainer = styled(Box)(({ theme }) => {
	const mdDown = getCustomBreakpoints(`md`, `down`);

	return css`
    justify-self: flex-end;
	`;
});

const ContactMeForm: React.FunctionComponent = () => {
	const { isRTL, isDarkMode } = useThemeContext();
	const [isRobot, setIsRobot] = useState(true);
	const [isLoading, setIsLoading] = useState(false);
	const {
		control,
		formState: { errors },
		handleSubmit,
	} = useForm<FormInputs>({
		resolver: yupResolver(validationSchema),
		defaultValues: {
			fullName: ``,
			email: ``,
		},
	});
	const [displayAlert, setDisplayAlert] = useState(false);
	const [alertMessage, setAlertMessage] = useState(``);
	type AlertSeverity = `success` | `error` | `warning` | `info` | undefined;
	const [alertSeverity, setAlertSeverity] = useState<AlertSeverity>(undefined);
	const intl = useIntl();
	const recaptcha = useRef<{ getValue: () => string }>();
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
		<form
			name={`contact`}
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
			<StyledGridContainer>
				<StyledFirstRow>
					<Controller
						name={`fullName`}
						control={control}
						render={({ field }) => (
							<TextField
								variant={`outlined`}
								label={<TranslateText text={`Full Name`} />}
								id={`full-name`}
								inputProps={{
									maxLength: 70,
								}}
								error={!!errors.fullName}
								helperText={errors.fullName?.message}
								required
								{...field}
							/>
						)} />
					<Controller
						name={`email`}
						control={control}
						render={({ field }) => (
							<TextField
								variant={`outlined`}
								label={<TranslateText text={`Email`} />}
								id={`email`}
								inputProps={{
									maxLength: 125,
								}}
								error={!!errors.email}
								helperText={errors.email?.message}
								required
								{...field}
							/>
						)} />
				</StyledFirstRow>
				<StyledGridItem>
					<Controller
						name={`message`}
						control={control}
						render={({ field }) => (
							<TextField
								variant={`outlined`}
								label={<TranslateText text={`Message`} />}
								id={`message`}
								inputProps={{
									maxLength: 640,
								}}
								fullWidth
								error={!!errors.message}
								helperText={errors.message?.message}
								multiline
								required
								{...field}
							/>
						)} />
				</StyledGridItem>
				{displayAlert && (
					<StyledGridItem>
						<Alert
							variant={`outlined`}
							severity={alertSeverity}
							onClose={() => setDisplayAlert(false)}
						>
							{alertMessage}
						</Alert>
					</StyledGridItem>
				)}
				<StyledGridItem>
					<ReCAPTCHA
						ref={recaptcha as RefObject<ReCAPTCHA>}
						sitekey={process.env.SITE_RECAPTCHA_KEY || ``}
						theme={isDarkMode ? `dark` : `light`}
						hl={isRTL ? `iw` : `en`}
						onChange={handleChange}
					/>
				</StyledGridItem>
				<StyledSubmitContainer>
					<Button
						type={`submit`}
						variant={`contained`}
						color={`primary`}
						disabled={isLoading}
						startIcon={<Send />}
					>
						<TranslateText text={`Send`} />
					</Button>
				</StyledSubmitContainer>
			</StyledGridContainer>
		</form>
	);
};

export default ContactMeForm;
