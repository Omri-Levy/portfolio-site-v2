import { IntlProvider } from 'react-intl';
import { ThemeContext } from '../../../context/ThemeContext';
import React, { useContext } from 'react';
import { useTranslations } from '../../../hooks/useTranslations';
import { ChildrenProps } from '../../../utils/types';

const Locales: React.FunctionComponent<ChildrenProps> = ({ children }) => {
	const { isRTL } = useContext(ThemeContext);
	const messages = {
		// page titles and links
		portfolio: useTranslations('תיק עבודות', 'Portfolio'),
		aboutMe: useTranslations('עלי', 'About Me'),
		contactMe: useTranslations('צרו קשר', 'Contact Me'),

		// nav logo
		omriLevy: useTranslations('עומרי לוי', 'Omri Levy'),
		fullstackDev: useTranslations('מפתח פולסטאק', 'Fullstack Dev'),

		// resume button
		myResume: useTranslations('קורות חיים', 'My Resume'),

		// about me page's text
		whoAmITitle: useTranslations('מי אני?', 'Who am I?'),
		whoAmISubtitle: useTranslations(
			'היי! קוראים לי עומרי לוי, אני בן 24 מתל אביב.',
			"Hi! My name is Omri Levy, I'm 24 year old from Tel-Aviv.",
		),
		whoAmIBody: useTranslations(
			'התחלתי לתכנת במאי 2019, מאז אני מתכנת מהרגע שאני קם ועד' +
				' שאני הולך לישון.',
			"I began programming in May of 2019, ever since I've been" +
				' programming from the moment I wake up and until I go to bed.',
		),

		// portfolio buttons
		liveSite: useTranslations('אתר חי', 'Live Site'),
		gitRepository: useTranslations('אחסון גיט', 'Git Repository'),

		// contact me form input fields
		email: useTranslations('אימייל', 'Email'),
		fullName: useTranslations('שם מלא', 'Full Name'),
		message: useTranslations('הודעה', 'Message'),

		// contact me form send button
		send: useTranslations('שלח', 'Send'),
	};

	return (
		<IntlProvider
			messages={messages}
			locale={isRTL ? 'he' : 'en'}
			defaultLocale='en'
		>
			{children}
		</IntlProvider>
	);
};

export default Locales;
