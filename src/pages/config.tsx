import { FC } from "react";
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import { AppRoute, FINISH_FLAG } from "shared/config";

import Main from "./Main";
import Feedback from "./Feedback";
import Greetings from "./Greetings";
import Notification from "./Notification";

import useCheckSession from "shared/hooks/useCheckSession";

// Формирование исходов роутинга

// Дефолтный роутинг

const appRoutes = createBrowserRouter([
  {
    path: AppRoute.MAIN,
    element: <Main />,
  },
  {
    path: AppRoute.FEEDBACK,
    element: <Feedback />,
  },
  {
    path: AppRoute.GREETINGS,
    element: <Greetings />,
  },
  {
    path: AppRoute.NOTIFICATION,
    element: <Notification />,
  },
  {
    path: AppRoute.NOT_FOUND,
    element: <Navigate to={AppRoute.MAIN} replace />,
  },
] as RouteObject[]);

// Роутинг после завершения

const finishRoutes = createBrowserRouter([
  {
    path: AppRoute.NOTIFICATION,
    element: <Notification />,
  },
  {
    path: AppRoute.NOT_FOUND,
    element: <Navigate to={AppRoute.NOTIFICATION} replace />,
  },
] as RouteObject[]);

// Формирование роутера

const Routing: FC = () => {
  const isFinished = useCheckSession(FINISH_FLAG);
  const router = isFinished ? finishRoutes : appRoutes;

  return <RouterProvider router={router} />;
};

export default Routing;
