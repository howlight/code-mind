import type { LoaderFunctionArgs } from 'react-router-dom';

export const coursesLoader = async () => {
  console.log('all courses loader');
};

export const courseLoader = async (props: LoaderFunctionArgs) => {
  console.log(`course info loader ${props.params.courseId}`);
};

export const subtopicsLoader = async () => {
  console.log(`subtopics loader`);
};

export const subtopicLoader = async (props: LoaderFunctionArgs) => {
  console.log(`subtopic loader ${props.params.topicId}`);
};

export const profileLoader = async () => {
  console.log(`profile loader`);
};
