import { Key } from '../types';


interface Icon {
  node: {
    fluid: {
      src: string;
    };
  };
}

type NewFavicon = Record<Key, never> | undefined;

export { Icon, NewFavicon };
