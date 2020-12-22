import fs from 'fs';
import path from 'path';
const fileName = path.basename(path.dirname(__filename));

// create entry point
fs.writeFile(
	'./index.ts',
	`export {default as ${fileName}} from './${fileName}';`,
	(err) => {
		if (err) {
			console.log(err);
			console.log('error at index.ts');
		}

		console.log('created index.ts');
	},
);

// create material ui/jss styling file
fs.writeFile(
	'./useStyles.ts',
	`import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

}));

export default useStyles;`,
	(err) => {
		if (err) {
			console.log(err);
			console.log('error at useStyles.ts');
		}

		console.log('created useStyles.ts');
	},
);

// create tests file
fs.writeFile(`./${fileName}.test.tsx`, '', (err) => {
	if (err) {
		console.log(err);
		console.log(`error at ${fileName}.test.ts`);
	}

	console.log(`created ${fileName}.test.ts`);
});

// create types file
fs.writeFile('./types.ts', '', (err) => {
	if (err) {
		console.log(err);
		console.log('error at types.ts');
	}

	console.log('created types.ts');
});

// create component file
fs.writeFile(
	`./${fileName}.tsx`,
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
