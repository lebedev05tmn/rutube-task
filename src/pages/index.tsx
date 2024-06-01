import { FC } from "react";
import Routing from "./config";
import withLayout from "shared/hocs/withLayout";

// Формирование роутера с HOC Layout

const LayoutedRouting: FC = withLayout(Routing);

export default LayoutedRouting;
