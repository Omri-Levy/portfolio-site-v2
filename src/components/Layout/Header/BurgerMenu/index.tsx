import { useTheme } from '@material-ui/core/styles';
import React, { useRef, useState } from 'react';
import { Props } from './types';
import useStyles from './useStyles';

const BurgerMenu: React.FunctionComponent<Props> = ({ animation }) => {
  const { burgerMenuContainer, burgerLinesContainer } = useStyles();
  const buttonRef = useRef<HTMLElement | null>(null);
  const span1Ref = useRef<HTMLElement | null>(null);
  const span2Ref = useRef<HTMLElement | null>(null);
  const span3Ref = useRef<HTMLElement | null>(null);
  const theme = useTheme();
  const [disabled, setDisabled] = useState(false);
  const handleClick = () => {
    setDisabled(true);
    setTimeout(() => setDisabled(false), 2000);

    animation
      .to([span1Ref.current, span3Ref.current], {
        backgroundColor: theme.palette.primary.dark,
      })
      .to(buttonRef.current, {
        borderColor: theme.palette.primary.dark,
      }, `-=0.5`)
      .to(span2Ref.current, {
        opacity: 0,
      }, `-=0.5`)
      .to(span1Ref.current, {
        rotation: `-405deg`,
        translateX: `0px`,
        translateY: `11px`,
      }, `-=0.5`)
      .to(span3Ref.current, {
        rotation: `405deg`,
        translateX: `0px`,
        translateY: `-6px`,
      }, `-=0.5`)

    animation.reversed() ? animation.play() : animation.reverse();
  };


  return (
    <button
      className={burgerMenuContainer}
      onClick={handleClick}
      ref={(element) => buttonRef.current = element}
      disabled={disabled}
    >
      <div className={burgerLinesContainer}>
        <span ref={(element) => span1Ref.current = element} />
        <span ref={(element) => span2Ref.current = element} />
        <span ref={(element) => span3Ref.current = element} />
      </div>
    </button>
  );
};

export default BurgerMenu;
