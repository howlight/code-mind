import type { Subtopic } from '../../model/types';
import styles from './subtopic-description.module.css';

type Props = Pick<Subtopic, 'title' | 'description'>;

export const SubtopicDescription = ({ title, description }: Props) => (
  <div className={styles.subtopic}>
    <h1 className={styles.title}>{title}</h1>
    <p className={styles.description}>{description}</p>
  </div>
);
