import { generateShouldDisplayAlert } from '~/hooks/useFetchState/generateShouldDisplayAlert';
import { SetState } from '~/utils/types';

const resetFetchState = (
	setFetchState: SetState<string | undefined>,
	fetchState: string | undefined,
) => (): void => {
	if (fetchState === undefined) {
		return;
	}

	setFetchState(undefined);
	generateShouldDisplayAlert(fetchState);
};

export default resetFetchState;
