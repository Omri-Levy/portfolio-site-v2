const styles: any = {
    icon: {
        color: '#eee',
        width: 48,
        height: 48,
    },
    box: {
        marginBottom: 53
    },
    innerBox: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    title: {
        fontSize: 16,
        fontWeight: 500,
        marginBottom: 26
    },
    body: {
        fontSize: 12,
        fontWeight: 400,
        marginBottom: 9,
        minWidth: 231,
        maxWidth: 231
    },
    carouselBackButton: {
        backgroundColor: 'transparent',
        border: 'none',
        position: 'absolute',
        top: 'calc(50% - 24px)',
        left: 16,
    },
    carouselNextButton: {
        backgroundColor: 'transparent',
        border: 'none',
        position: 'absolute',
        top: 'calc(50% - 24px)',
        right: 16,
    },
    imageContainer: {
        position: 'relative',
    },
    image: {
        paddingLeft: 20,
        paddingRight: 20,
    },
    buttonsContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '20px 64px'
    },
    primaryButton: {
        width: 60,
        height: 25,
        fontSize: 12,
        fontWeight: 500,
        padding: 4,
        textTransform: 'unset'
    },
    secondaryButton: {
        width: 94,
        height: 25,
        fontSize: 12,
        fontWeight: 500,
        padding: 4,
        textTransform: 'unset'
    }
};

export default styles;
