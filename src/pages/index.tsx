import { FC } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./config";

// Формирование роутера

const Routing: FC = () => <RouterProvider router={router} />;

export default Routing;
