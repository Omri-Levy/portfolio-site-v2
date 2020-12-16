import {React} from 'src/deps';

type AnchorOrButtonEvent = (
    React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement>
    );

export {AnchorOrButtonEvent};
