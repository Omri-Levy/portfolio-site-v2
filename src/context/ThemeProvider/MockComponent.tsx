import { Button } from '@material-ui/core';
import React, { useContext } from 'react';
import { ThemeContext } from '.';

const MockComponent: React.FunctionComponent = () => {
  const { primaryColor } = useContext(ThemeContext);

  return (
    <div>
      <Button />
      {primaryColor}
    </div>
  );
};

export default MockComponent;
