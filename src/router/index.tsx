interface Route {
  path?: string;
  element?: React.ReactNode;
  children?: Route[];
}

const privateRoutes: Route[] = [];

export const publicRoute: Route[] = [
  {
    children: privateRoutes,
  },
];
