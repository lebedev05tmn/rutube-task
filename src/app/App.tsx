import { FC } from "react";

import Routing from "pages";
import withLayout from "./hocs/withLayout";

import "@fontsource/roboto";
import "@fontsource/roboto/700.css";
import "./Global.scss";

// Компонент с HOC layout

const LayoutComponent = withLayout(Routing);

const App: FC = () => <LayoutComponent />;

export default App;
