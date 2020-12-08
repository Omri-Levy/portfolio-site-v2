const inputProps = {
    style: {
        color: '#fff',
        backgroundColor: '#393e46',
        borderRadius: 5,
        fontSize: 11
    },
    ref: null
};
const fullNameProps = {
    ...inputProps,
    maxLength: 70
};
const emailProps = {
    ...inputProps,
    maxLength: 125
};
const messageProps = {
    ...inputProps,
    style: {
        ...inputProps.style,
        height: 106
    },
    maxLength: 640
};
const labelStyle = {
    style: {
        fontSize: 11
    }
};

export {inputProps, fullNameProps, emailProps, messageProps, labelStyle}
