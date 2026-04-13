import { LinkButton } from '~/components/link-button';
import { Paths } from '~/constants';

import notFoundAvif from './assets/not-found.avif';
import notFoundJpg from './assets/not-found.jpg';
import notFoundWebp from './assets/not-found.webp';
import styles from './not-found-page.module.css';

export const NotFoundPage = () => (
  <section className={styles.notFound}>
    <picture>
      <source srcSet={notFoundAvif} type="image/avif" />
      <source srcSet={notFoundWebp} type="image/webp" />
      <img src={notFoundJpg} alt="Page was not found" width="900" height="600" />
    </picture>
    <LinkButton to={Paths.ROOT}>Back to Home</LinkButton>
  </section>
);
