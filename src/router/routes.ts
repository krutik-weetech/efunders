import {
  createBrowserRouter,
  // redirect
} from "react-router";
// import Login from "../pages/Login";
// import Layout from "../components/Layout";
// import Dashboard from "../pages/Dashboard";
// import PrivacyPolicy from "../pages/PrivacyPolicy";
// import TermsAndConditions from "../pages/TermsAndConditions";
import { Route } from "../enum/index.tsx";
// import ProtectedRoutes from "./ProtectedRoutes";
import NotFound from "../pages/NotFound";
import Landing from "../pages/Landing";

export const routes = [
    { path: Route.HOME, Component: Landing },
  //   { path: Route.ADMIN_LOGIN, Component: Login },
  //   { path: Route.PRIVACY_POLICY, Component: PrivacyPolicy },
  //   { path: Route.TERMS_AND_CONDITIONS, Component: TermsAndConditions },
  //   { path: Route.ADMIN, loader: () => redirect(Route.DASHBOARD) },
  //   { path: Route.LOGIN, loader: () => redirect(Route.ADMIN_LOGIN) },
  //   {
  //     path: Route.DASHBOARD,
  //     Component: ProtectedRoutes,
  //     children: [
  //       {
  //         path: Route.DASHBOARD,
  //         Component: Layout,
  //         children: [{ index: true, Component: Dashboard }],
  //       },
  //     ],
  //   },
    { path: "*", Component: NotFound },
];

export const router = createBrowserRouter(routes);
