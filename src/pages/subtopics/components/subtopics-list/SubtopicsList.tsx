import classNames from 'classnames';

import type { Subtopic } from '../../model/types';
import styles from './subtopics-list.module.css';

type Props = {
  subtopics: Subtopic[];
  activeSubtopicId: string;
  onSelectSubtopic: (subtopicId: string) => void;
};

export const SubtopicsList = ({ subtopics, activeSubtopicId, onSelectSubtopic }: Props) => (
  <aside>
    <h2 className={styles.title}>Навигация</h2>
    <ul className={styles.subtopicsList}>
      {subtopics.map(({ id, title }) => (
        <li key={id}>
          <button
            className={classNames(styles.subtopicsBtn, {
              [styles.active]: activeSubtopicId === id,
            })}
            onClick={() => onSelectSubtopic(id)}
          >
            {title}
          </button>
        </li>
      ))}
    </ul>
  </aside>
);
