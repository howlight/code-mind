export const BASE_URL = import.meta.env.VITE_BASE_URL;

export const Paths = {
  ROOT: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  ABOUT_US: '/about-us',
  PROFILE: '/profile',
  DASHBOARD: '/dashboard',
  COURSES: '/courses',
  COURSE: '/courses/:courseId',
  SUBTOPICS: '/courses/:courseId/subtopics',
  TRAINER: '/courses/:courseId/subtopics/:subtopicId/:trainerType',
  OTHER_PATHS: '*',
} as const;
