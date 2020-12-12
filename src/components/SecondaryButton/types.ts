import { React } from '../../deps';

interface Props {
  text: string;
  className: any;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: string;
  to?: string;
}

export { Props };
