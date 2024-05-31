import { createBrowserRouter, RouteObject } from "react-router-dom";
import { AppRoute } from "shared/config";
import Main from "./Main";
import Feedback from "./Feedback";
import Greetings from "./Greetings";
import Notification from "./Notification";
import NotFound from "./NotFound";

export const router = createBrowserRouter([
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
    element: <NotFound />,
  },
] as RouteObject[]);
