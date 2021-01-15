/* eslint-disable */
const fs = require(`fs`);
const path = require(`path`);
/* eslint-enable */

const fileName = path.basename(path.dirname(__filename));

// create material ui/jss styling file
fs.writeFile(
	`./useStyles.ts`,
	`import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

}));

export default useStyles;`,
	(err) => {
		if (err) {
			console.log(err);
			console.log(`error at useStyles.ts`);
		}

		console.log(`created useStyles.ts`);
	},
);

// create tests file
fs.writeFile(
	`./${fileName}.test.tsx`,
	`describe(\`${fileName}\`, () => {
	it(\`${fileName} temp\`, () => {
		expect(true).toBeTruthy();
	});
});`,
	(err) => {
		if (err) {
			console.log(err);
			console.log(`error at ${fileName}.test.tsx`);
		}

		console.log(`created ${fileName}.test.tsx`);
	},
);

// create types file
fs.writeFile(`./types.d.ts`, ``, (err) => {
	if (err) {
		console.log(err);
		console.log(`error at types.d.ts`);
	}

	console.log(`created types.d.ts`);
});

// create component file
fs.writeFile(
  `.`,
  `import React from 'react';
import useStyles from './useStyles';

const ${fileName}: React.FunctionComponent = () => {
	const classes = useStyles();
	
	return (
		<div className={classes.nameContainer}>
			<h1>${fileName}</h1>
		</div>
	);
};

export default ${fileName};
`,
	(err) => {
		if (err) {
			console.log(err);
			console.log(`error at ${fileName}.tsx`);
		}

		console.log(`created ${fileName}.tsx`);
	},
);
