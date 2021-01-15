import React from 'react';

interface Props extends React.HTMLProps<HTMLButton> {
  animation: gsap.core.Timeline,
}

export { Props };
