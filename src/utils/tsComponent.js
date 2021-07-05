/* eslint-disable */
const fs = require(`fs`);
const path = require(`path`);
/* eslint-enable */

const fileName = path.basename(path.dirname(__filename));

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
	`./index.tsx`,
	`import React from 'react';


const ${fileName}: React.FunctionComponent = () => {
	
	
	return (
		<div >
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
