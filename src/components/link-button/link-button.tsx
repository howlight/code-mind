import classNames from 'classnames';
import { Link } from 'react-router-dom';

import styles from './link-button.module.css';

type LinkButtonProperties = {
  to: string;
  children: React.ReactNode;
  className?: string;
};

export const LinkButton = ({ to, children, className = '' }: LinkButtonProperties) => (
    <Link to={to} className={classNames(styles.linkButton, className).trim()}>
      {children}
    </Link>
  );
