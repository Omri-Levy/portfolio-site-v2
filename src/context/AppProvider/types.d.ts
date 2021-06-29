import { SetState } from '../../utils/types';

interface AppContextType {
	isBurgerMenuOpen: boolean,
	setIsBurgerMenuOpen: SetState<boolean>,
}

export { AppContextType };
