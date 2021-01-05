import { FetchState } from '~/hooks/useFetchState/types';
import { SetState } from '~/utils/types';

interface Data {
	fullName: string;
	email: string;
	message: string;
}

interface Props {
	toTest: string;
}

type SetFetchState = SetState<FetchState>;

export { Data, SetFetchState, Props };
