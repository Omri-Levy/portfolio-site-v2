import { Button } from 'gatsby-theme-material-ui';
import { React } from '../../deps';
import { Props } from './types';

const SecondaryButton: React.FC<Props> = ({
  text,
  className,
  to,
  ...props
}) => {
  return (
    <Button
      to={to ?? undefined}
      //@ts-ignore
      target={to ?? '_blank'}
      variant={'outlined'}
      color={'primary'}
      className={className}
      {...props}
    >
      {text}
    </Button>
  );
};

export default SecondaryButton;
