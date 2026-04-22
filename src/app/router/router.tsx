import { createBrowserRouter, Navigate } from 'react-router-dom';

import { courseLoader, coursesLoader, profileLoader, subtopicsLoader } from '~/api/loaders';
import { Paths } from '~/constants/paths';
import { AboutUsPage } from '~/pages/about-us';
import { LoginPage } from '~/pages/auth/login';
import { RegisterPage } from '~/pages/auth/register';
import { CoursePage } from '~/pages/course';
import { CoursesPage } from '~/pages/courses';
import { ErrorPage } from '~/pages/error';
import { NotFoundPage } from '~/pages/not-found';
import { ProfilePage } from '~/pages/profile';
import { SubtopicsPage } from '~/pages/subtopics';

import { AppLayout } from '../layouts/app-layout';
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
        path: Paths.COURSES,
        element: <CoursesPage />,
        loader: coursesLoader,
      },
      {
        path: Paths.COURSE,
        element: <CoursePage />,
        loader: courseLoader,
      },
      {
        path: Paths.SUBTOPICS,
        element: (
          <ProtectedRoute>
            <SubtopicsPage />
          </ProtectedRoute>
        ),
        loader: subtopicsLoader,
      },
      {
        path: Paths.TRAINER,
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
        loader: profileLoader,
      },
      {
        path: Paths.OTHER_PATHS,
        element: <NotFoundPage />,
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
]);
