import classNames from 'classnames';
import { Fragment } from 'react/jsx-runtime';
import { NavLink, useLocation } from 'react-router-dom';

import { Paths } from '~/constants';

import styles from './breadcrumbs.module.css';
import { useBreadcrumbs } from './hooks/useBreadcrumbs';

export const HeaderBreadcrumbs = () => {
  const { pathname } = useLocation();
  const crumbs = useBreadcrumbs();
  return (
    <>
      {crumbs.map(({ name, path }, index) => {
        const isLast = index === crumbs.length - 1;
        return (
          <Fragment key={path}>
            {index === 0 ? '' : <span> /</span>}
            <NavLink
              to={path}
              className={classNames(styles.link, {
                [styles.active]: isLast && pathname.startsWith(Paths.COURSES),
              })}
            >
              {name}
            </NavLink>
          </Fragment>
        );
      })}
    </>
  );
};
