import useAllFavicons from '../utils/useAllFavicons';

const themeFavicon = (primaryColor: string) => {
    const oldFavicon = document.querySelector('link[rel~=\'icon\']');
    const appleLinks = document.querySelectorAll(
        'link[rel~=\'apple-touch-icon\']');
    const {icons} = useAllFavicons();

    // get the last characters of the primary color hex due to the cached
    // file name.
    const slicedHex = primaryColor.slice(primaryColor.length - 4, -1);

    interface Icon {
        node: {
            fluid: {
                src: string;
            }
        }
    }

    // return the favicon with the latest picked theme color
    const newFavicon = icons.edges.filter((icon: Icon) => (
        icon.node.fluid.src.includes(slicedHex)
    ))[0].node.fluid.src;

    if (oldFavicon) {
        oldFavicon!['href'] = newFavicon;
    }

    appleLinks.forEach((appLink) => appLink['href'] = newFavicon);
};

export default themeFavicon;