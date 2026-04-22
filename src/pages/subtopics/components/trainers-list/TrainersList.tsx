import classNames from 'classnames';
import { Link } from 'react-router-dom';

import { TRAINERS } from '../../model/trainers-config';
import type { SubtopicTrainer } from '../../model/types';
import styles from './trainers-list.module.css';

type Props = {
  trainers: SubtopicTrainer[];
};

export const TrainersList = ({ trainers }: Props) => (
  <ul className={styles.trainersList}>
    {trainers.map(({ type, isCompleted }) => {
      const { id, title, icon, slug } = TRAINERS[type];

      return (
        <li key={id}>
          <Link to={slug}>
            <article
              className={classNames(styles.trainerCard, {
                [styles.completed]: isCompleted,
              })}
            >
              <div className={styles.progressIcon}>{icon}</div>
              <div className={styles.title}>{title}</div>
              <div className={styles.progressStatus}>
                {isCompleted ? 'COMPLETED' : 'UNCOMPLETED'}
              </div>
            </article>
          </Link>
        </li>
      );
    })}
  </ul>
);
