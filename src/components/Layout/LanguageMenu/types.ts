import React from 'react';

type AnchorOrButtonEvent = (
    React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement>
    );
type EventCurrentTarget = (EventTarget & HTMLAnchorElement) |
    (EventTarget & HTMLButtonElement);

export {
    AnchorOrButtonEvent,
    EventCurrentTarget
};
