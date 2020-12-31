module.exports = {
	transform: {
		'^.+\\.[jt]sx?$': `<rootDir>/jest-preprocess.js`,
	},
	moduleNameMapper: {
		'.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
		'.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|pdf)$': `<rootDir>/__mocks__/file-mock.js`,
		'~/(.*)': `<rootDir>/src/$1`,
	},
	watchPathIgnorePatterns: [`.cache`],
	moduleDirectories: [`node_modules`, `src`],
	testPathIgnorePatterns: [`node_modules`, `.cache`, `<rootDir>.*/public`],
	transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
	globals: {
		__PATH_PREFIX__: ``,
	},
	testURL: `http://localhost`,
	setupFiles: [`<rootDir>/loadershim.js`],
	setupFilesAfterEnv: [`@testing-library/jest-dom/extend-expect`],
};
