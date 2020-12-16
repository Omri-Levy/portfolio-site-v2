type RTLComponentType = JSX.Element;
type LTRComponentType = JSX.Element;

type HookReturns = (
    RTLComponent: RTLComponentType,
    LTRComponent: LTRComponentType
) => RTLComponentType | LTRComponentType;

export {HookReturns};
