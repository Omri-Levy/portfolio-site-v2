/* eslint-disable */
declare const graphql: (query: TemplateStringsArray) => void;

declare module '*.png' {
	const value: never;
	export = value;
}

declare module '*.pdf' {
	const value: never;
	export = value;
}

declare module '@material-ui/core/styles/createBreakpoints' {
	interface BreakpointOverrides {
		xs: true;
		sm: true;
		ms: true;
		md: true;
		lg: true;
		mlg: true;
		xl: true;
	}
}
