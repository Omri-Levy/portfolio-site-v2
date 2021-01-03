import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Grid, TextField } from '@material-ui/core';
import { init, send } from 'emailjs-com';
import { useForm } from 'react-hook-form';
import { TranslateText } from '~/components/Layout/Locales/TranslateText';
import { validationSchema } from '../validationSchema';
import { Data, FormInputs } from './types';
import useStyles from './useStyles';
import React from 'react';
import { ButtonLink } from '~/components/ButtonLink';

const ContactMeForm: React.FunctionComponent = () => {
	init(`user_VCUWzf1n5yq07YDWAJoZH`);
	const classes = useStyles();
	const { register, errors, handleSubmit } = useForm<FormInputs>({
		resolver: yupResolver(validationSchema),
	});

	const messageProps = {
		ref: register,
		maxLength: 640,
	};
	const fullNameProps = {
		ref: register,
		maxLength: 70,
	};
	const emailProps = {
		ref: register,
		maxLength: 125,
	};

	const onSubmit = async (data: Data) => {
		const templateParams = {
			fullName: data.fullName,
			email: data.email,
			message: data.message,
		};
		const email = await send(
			`service_vv503ou`,
			`template_40335ln`,
			templateParams,
		);

		console.log(email);
	};

	return (
		<Box className={classes.contactMeFormContainer}>
			<form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
				<Grid container className={classes.formGridContainer}>
					<Grid item className={classes.fullNameGridItem}>
						<TextField
							autoFocus
							name={`fullName`}
							variant={`filled`}
							label={<TranslateText text={`Full Name`} />}
							id={`full-name`}
							className={classes.fullName}
							inputProps={fullNameProps}
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
							inputProps={emailProps}
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
							inputProps={messageProps}
							error={!!errors.message}
							helperText={errors.message?.message}
							multiline
							required
						/>
					</Grid>
					<Grid
						className={classes.sendButtonContainer}
						container
						item
						direction={`column`}
						alignItems={`flex-end`}
					>
						<ButtonLink variant={`secondary`} type={`submit`} text={`Send`} />
					</Grid>
				</Grid>
			</form>
		</Box>
	);
};

export default ContactMeForm;
