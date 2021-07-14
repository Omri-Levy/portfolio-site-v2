import resume from './resume.pdf';

const openResume = () => {
	if (!resume) {
		return;
	}

	window.open(resume);
};

export default openResume;
