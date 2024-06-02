import { FC } from "react";

import LayoutedRouting from "pages";
import AppContext from "./providers/AppContext";

import "@fontsource/roboto";
import "@fontsource/roboto/700.css";
import "./Global.scss";

const App: FC = () => (
  <AppContext>
    <LayoutedRouting />
  </AppContext>
);

export default App;
