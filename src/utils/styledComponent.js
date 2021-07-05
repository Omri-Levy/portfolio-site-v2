/* eslint-disable */
const fs = require(`fs`);
const path = require(`path`);
/* eslint-enable */

const fileName = path.basename(path.dirname(__filename));

// export file
fs.writeFile(
	`./index.ts`,
	`export {default as ${fileName}} from './${fileName}';
	`,
	(err) => {
		if (err) {
			console.log(err);
			console.log(`error at index.ts`);
		}

		console.log(`created index.ts`);
	},
);

// styled component file
fs.writeFile(
	`./${fileName}.ts`,
	`import styled, { css } from 'styled-components';
	
const ${fileName} = styled('div')(({theme}) => {
	
		return css\`\`;
});
	
export default ${fileName};
`,
	(err) => {
		if (err) {
			console.log(err);
			console.log(`error at ${fileName}.ts`);
		}

		console.log(`created ${fileName}.ts`);
	},
);
