declare const graphql: (query: TemplateStringsArray) => void;
// eslint-disable-next-line
declare module '*.png' {
	const value: never;
	export = value;
}
// eslint-disable-next-line
declare module '*.pdf' {
	const value: never;
	export = value;
}
//eslint-disable-next-line
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
