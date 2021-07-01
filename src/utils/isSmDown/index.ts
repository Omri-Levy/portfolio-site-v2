import getCustomBreakpoints from '../getCustomBreakpoints';

/**
 * returns a media query string of the sm breakpoint and down or a boolean
 * depending on the provided argument (true | false).
 */
const isSmDown = (returnBoolean?: boolean) => (
	getCustomBreakpoints(`sm`, `down`, returnBoolean)
);

export default isSmDown;
