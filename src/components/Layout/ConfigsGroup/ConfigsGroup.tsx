import {Box} from '@material-ui/core';
import classnames from 'classnames';
import {ThemeSelector} from 'src/components/Layout/BottomToolbar/ThemeSelector';
import {DarkModeToggle} from 'src/components/Layout/DarkModeToggle';
import {LanguageMenu} from 'src/components/Layout/LanguageMenu';
import {React} from 'src/deps';
import useDevice from 'src/hooks/useDevice/useDevice';
import useStyles from './useStyles';

const ConfigsGroup: React.FunctionComponent = () => {
    const classes = useStyles();
    const {topConfigContainer, bottomConfigContainer} = classes;
    const {isDesktop, isMobile} = useDevice();
    const classNames = classnames({
        [bottomConfigContainer]: isMobile,
        [topConfigContainer]: isDesktop
    });

    return (
        <Box className={classNames}>
            <ThemeSelector/>
            <DarkModeToggle/>
            <LanguageMenu/>
        </Box>
    );
};

export default ConfigsGroup;
