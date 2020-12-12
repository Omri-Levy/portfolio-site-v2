import { Button } from 'gatsby-theme-material-ui';
import { React } from '../../deps';
import { Props } from './types';

const PrimaryButton: React.FC<Props> = ({ text, className, to }) => {
  return (
    <Button
      to={to ?? undefined}
      //@ts-ignore
      target={to ?? '_blank'}
      variant={'contained'}
      color={'primary'}
      className={className}
    >
      {text}
    </Button>
  );
};

export default PrimaryButton;
