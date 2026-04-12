import { Link } from 'react-router-dom';

import { Paths } from '~/constants';

import type { Course } from '../../model/types';
import { CourseCard } from '../course-card/course-card';
import styles from './courses-list.module.css';

type Props = {
  courses: Course[];
};

export const CoursesList = ({ courses }: Props) => (
  <ul className={styles.coursesList}>
    {courses.map((course) => (
      <li key={course.id}>
        <Link to={`${Paths.COURSES}/${course.slug}`}>
          <CourseCard {...course} />
        </Link>
      </li>
    ))}
  </ul>
);
