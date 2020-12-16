import {React} from 'src/deps';

type AnchorOrButtonEvent = (
    React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement>
    );
type EventCurrentTarget = (EventTarget & HTMLAnchorElement) |
    (EventTarget & HTMLButtonElement);

export {
    AnchorOrButtonEvent,
    EventCurrentTarget
};
