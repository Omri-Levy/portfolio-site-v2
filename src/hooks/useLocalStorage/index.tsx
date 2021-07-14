import { useEffect, useState } from 'react';
import { GetCachedValue, HookReturns, SetCachedValue } from './types';

const useLocalStorage: HookReturns = (key, defaultValue) => {
	const setCachedValue: SetCachedValue = (toCache) => {
		if (typeof localStorage === 'undefined') {
			return;
		}

		let toCacheString: string | any = toCache;

		if (typeof toCacheString !== `string`) {
			toCacheString = JSON.stringify(toCache);
		}

		localStorage.setItem(key, toCacheString);
	};
	const getCachedValue: GetCachedValue = () => {
		if (typeof localStorage === 'undefined') {
			return;
		}

		let cachedValue = localStorage.getItem(key) as string;

		if (!cachedValue) {
			let defaultValueString: string | any = defaultValue;

			if (typeof defaultValueString !== `string`) {
				defaultValueString = JSON.stringify(defaultValueString);
			}

			setCachedValue(defaultValueString);
			cachedValue = defaultValueString;
		}

		return JSON.parse(cachedValue);
	};

	const [value, setValue] = useState(() => getCachedValue());

	useEffect(() => {
		setCachedValue(value);
	}, [value]);


	return [value, setValue];
};

export default useLocalStorage;
