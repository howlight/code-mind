import { createBrowserRouter, Navigate } from 'react-router-dom';

import {
  allCoursesLoader,
  courseInfoLoader,
  myCoursesLoader,
  topicLoader,
  topicsLoader,
} from '~/api/loaders';
import { Paths } from '~/constants/paths';
import { AboutUsPage } from '~/pages/about-us';
import { LoginPage } from '~/pages/auth/login';
import { RegisterPage } from '~/pages/auth/register';
import { CoursePage } from '~/pages/course';
import { CoursesPage } from '~/pages/courses';
import { Dashboard } from '~/pages/dashboard';
import { ErrorPage } from '~/pages/error';
import { LessonPage } from '~/pages/lesson';
import { NotFoundPage } from '~/pages/not-found';
import { ProfilePage } from '~/pages/profile';
import { TopicsPage } from '~/pages/topics';

import { AppLayout } from '../layouts/app-layout';
import { CoursesLayout } from '../layouts/courses-layout';
import { TrainersLayout } from '../layouts/trainers-layout';
import { GuestRoute } from './GuestRoute';
import { ProtectedRoute } from './ProtectedRoute';

export const router = createBrowserRouter([
  {
    path: Paths.ROOT,
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Navigate to={Paths.ABOUT_US} replace />,
      },
      {
        path: Paths.ABOUT_US,
        element: <AboutUsPage />,
      },
      {
        path: Paths.DASHBOARD,
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: Paths.COURSES,
        element: <CoursesLayout />,
        children: [
          {
            index: true,
            element: <Navigate to={Paths.ALL_COURSES} replace />,
          },
          {
            path: Paths.ALL_COURSES,
            element: <CoursesPage />,
            loader: allCoursesLoader,
          },
          {
            path: Paths.MY_COURSES,
            element: (
              <ProtectedRoute>
                <CoursesPage />
              </ProtectedRoute>
            ),
            loader: myCoursesLoader,
          },
        ],
      },
      {
        path: Paths.COURSE_INFO,
        element: <CoursePage />,
        loader: courseInfoLoader,
      },
      {
        path: Paths.TOPICS,
        element: (
          <ProtectedRoute>
            <TopicsPage />
          </ProtectedRoute>
        ),
        loader: topicsLoader,
      },
      {
        path: Paths.TOPIC,
        element: (
          <ProtectedRoute>
            <LessonPage />
          </ProtectedRoute>
        ),
        loader: topicLoader,
      },
      {
        path: Paths.WIDGET,

        element: (
          <ProtectedRoute>
            <TrainersLayout />
          </ProtectedRoute>
        ),
      },
      {
        path: Paths.PROFILE,
        element: (
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: Paths.LOGIN,
    element: (
      <GuestRoute>
        <LoginPage />
      </GuestRoute>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: Paths.REGISTER,
    element: (
      <GuestRoute>
        <RegisterPage />
      </GuestRoute>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: Paths.NOT_FOUND,
    element: <NotFoundPage />,
  },
  {
    path: Paths.OTHER_PATHS,
    element: <Navigate to={Paths.NOT_FOUND} replace />,
  },
]);
