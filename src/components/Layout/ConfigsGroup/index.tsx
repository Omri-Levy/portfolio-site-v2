import { Card, ClickAwayListener, Fade, IconButton } from '@material-ui/core';
import { SettingsOutlined } from '@material-ui/icons';
import React, { useState } from 'react';
import DarkModeToggle from './DarkModeToggle';
import LanguageMenu from './LanguageMenu';
import ThemeSelector from './ThemeSelector';
import styled, { css } from 'styled-components';

const configDimensions = `2.5rem`;
const StyledIconButton = styled(IconButton)(({ theme }) => {

	return css`
    position: relative;
    width: ${configDimensions};
    height: ${configDimensions};
    font-size: ${configDimensions};
    padding: ${theme.spacing(0.2)}rem;
    border: 2px solid ${theme.palette.primary.main};
    color: ${theme.palette.primary.main};

    transition: transform 240ms;

    &:hover,
    &:focus {
      transform: rotate(360deg);
      background-color: ${theme.palette.primary.dark};
      color: ${theme.palette.primary.light};
      border: 2px solid ${theme.palette.primary.light};
    }
	`;
});
const StyledConfigContainer = styled(Card)(({ theme }) => {

	return css`
    padding: ${theme.spacing(0.03)}em;
    border-radius: 100vh;
    position: absolute;
    bottom: ${theme.spacing(0.5)}em;
    left: ${theme.spacing(0.5)}em;
    display: flex;
	`;
});
const StyledDiv = styled(`div`)(({ theme }) => {

	return css`
    z-index: 5;
    position: fixed;
    bottom: ${configDimensions};
    left: ${configDimensions};
	`;
});

const ConfigsGroup: React.FunctionComponent = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggleIsOpen = () => setIsOpen((prevState) => !prevState);
	const onClickAway = () => setIsOpen(false);

	return (
		<ClickAwayListener onClickAway={onClickAway}>
			<StyledDiv>
				<StyledIconButton onClick={toggleIsOpen}>
					<SettingsOutlined fontSize={`inherit`} />
				</StyledIconButton>
				<Fade in={isOpen}>
					<StyledConfigContainer role={`group`}>
						<ThemeSelector />
						<DarkModeToggle />
						<LanguageMenu />
					</StyledConfigContainer>
				</Fade>
			</StyledDiv>
		</ClickAwayListener>
	);
};

export default ConfigsGroup;
