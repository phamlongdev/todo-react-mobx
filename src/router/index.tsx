import AppLayout from "../layout/AppLayout";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";

interface Route {
  path?: string;
  element?: React.ReactNode;
  children?: Route[];
}

const privateRoutes: Route[] = [
  {
    path: "",
    element: <Home />,
  },
];

export const publicRoute: Route[] = [
  {
    element: <AppLayout />,
    children: privateRoutes,
  },
  {
    path: "*",
    element: (
      <NotFound
        code={404}
        message={"Sorry, the page you visited does not exist."}
      />
    ),
  },
];
