import { FluidObject, GatsbyImageProps } from 'gatsby-image';

interface HookReturns extends GatsbyImageProps {
	image: {
		childImageSharp: {
			fluid: FluidObject | FluidObject[];
		};
	};
}

export { HookReturns };
