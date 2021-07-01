import React from 'react';
import { IntlProvider } from 'react-intl';
import useTranslations from '../../../hooks/useTranslations';
import { ChildrenProps } from '../../../utils/types';
import useThemeContext from '../../../context/ThemeProvider/useThemeContext';

const Locales: React.FunctionComponent<ChildrenProps> = ({ children }) => {
	const { isRTL } = useThemeContext();
	const messages = {
		// page titles and links
		portfolio: useTranslations(`תיק עבודות`, `Portfolio`),
		aboutMe: useTranslations(`עלי`, `About Me`),
		contactMe: useTranslations(`צרו קשר`, `Contact Me`),
		landingPage: useTranslations(`דף נחיתה`, `Landing Page`),
		home: useTranslations(`דף בית`, `Home Page`),

		// nav logo
		omriLevy: useTranslations(`עומרי לוי`, `Omri Levy`),
		portfolioSite: useTranslations(`אתר תיק עבודות`, `Portfolio Site`),

		// resume button
		myResume: useTranslations(`קורות חיים`, `My Resume`),

		// about me page`s text
		whoAmITitle: useTranslations(`מי אני?`, `Who am I?`),
		whoAmISubtitle: useTranslations(
			`היי! קוראים לי עומרי לוי, אני בן 24 מתל אביב.`,
			`Hi! My name is Omri Levy, I\'m 24 year old from Tel-Aviv.`,
		),
		whoAmIBody: useTranslations(
			`התחלתי לתכנת במאי 2019, מאז אני מתכנת מהרגע שאני קם ועד` +
			` שאני הולך לישון.`,
			`I began programming in May of 2019, ever since I\`ve been` +
			` programming from the moment I wake up and until I go to bed.`,
		),

		// portfolio buttons
		liveSite: useTranslations(`אתר חי`, `Live Site`),
		gitRepository: useTranslations(`אחסון גיט`, `Git Repository`),

		// contact me form input fields
		email: useTranslations(`אימייל`, `Email`),
		fullName: useTranslations(`שם מלא`, `Full Name`),
		message: useTranslations(`הודעה`, `Message`),

		// contact me form send button
		send: useTranslations(`שלח`, `Send`),

		// contact me form alert messages
		success: useTranslations(
			`ההודעה נשלחה בהצלחה!`,
			`Message sent successfully!`,
		),
		error: useTranslations(
			`משהו השתבש! אנא נסה/י שוב מאוחר יותר..`,
			`Something went wrong! Please try again later..`,
		),
		cooldown: useTranslations(
			`הודעה כבר נשלחה! אנא נסה/י שוב בעוד 5 דקות.`,
			`Message already sent! Please try again in 5 minutes.`,
		),
		robot: useTranslations(
			`אנא אמת/י שאת/ה לא רובוט ונסה/י שוב.`,
			`Please verify you are not a robot and try again.`,
		),

		//images alt text
		projectGif: useTranslations(`-גיף-פרויקט`, `-project-gif`),
	};

	return (
		<IntlProvider
			messages={messages}
			locale={isRTL ? `he` : `en`}
			defaultLocale={`en`}
		>
			{children}
		</IntlProvider>
	);
};

export default Locales;
