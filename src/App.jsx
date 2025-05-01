import Home from "./Pages/Home";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import UserAgreement from "./Pages/UserAgreement";
import Terms from "./Pages/TermsCondition";
import Footer from "./Components/Footer";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Packages from "./Pages/Package";
import Thailand from "./Pages/Packages/Thailand";
import Goa from "./Pages/Packages/Goa";
import Dubai from "./Pages/Packages/Dubai";
import Kashmir from "./Pages/Packages/Kashmir";
import Mathura from "./Pages/Packages/Mathura";
import Jaisalmer from "./Pages/Packages/Jaisalmer";
import Udaipur from "./Pages/Packages/Udaipur";
import Darjeeling from "./Pages/Packages/Darjeeling";
import Pachmarhi from "./Pages/Packages/Pachmarhi";
import Ooty from "./Pages/Packages/Ooty";
import Leh_Ladakh from "./Pages/Packages/Leh_Ladakh";
import Manali from "./Pages/Packages/Manali";
import Kumbhalgarh from "./Pages/Packages/Kumbhalgarh";
import Kerala from "./Pages/Packages/Kerala";
import Rameswaram from "./Pages/Packages/Rameswaram";
import Maldives from "./Pages/Packages/Maldives";
import AdminDashboard from "./Admin/AdminDashboard";
import PackageManagement from "./Admin/PackageManagement";
import AdminPackages from "./Admin/AdminPackages";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/package", element: <Packages /> },
  { path: "/contact", element: <Footer /> },
  { path: "/login", element: <Login /> },
  { path: "/privacy", element: <PrivacyPolicy /> },
  { path: "/signup", element: <Signup /> },
  { path: "/userAgreement", element: <UserAgreement /> },
  { path: "/terms", element: <Terms /> },
  { path: "/thailand", element: <Thailand /> },
  { path: "/goa", element: <Goa /> },
  { path: "/dubai", element: <Dubai /> },
  { path: "/kashmir", element: <Kashmir /> },
  { path: "/mathura", element: <Mathura /> },
  { path: "/jaisalmer", element: <Jaisalmer /> },
  { path: "/udaipur", element: <Udaipur /> },
  { path: "/darjeeling", element: <Darjeeling /> },
  { path: "/pachmarhi", element: <Pachmarhi /> },
  { path: "/ooty", element: <Ooty /> },
  { path: "/leh ladakh", element: <Leh_Ladakh /> },
  { path: "/manali", element: <Manali /> },
  { path: "/kumbhalgarh", element: <Kumbhalgarh /> },
  { path: "/kerala", element: <Kerala /> },
  { path: "/rameswaram", element: <Rameswaram /> },
  { path: "/maldives", element: <Maldives /> },
  { path: "/admindashboard", element: <AdminDashboard /> },
  { path: "/packagemanagement", element: <PackageManagement /> },
  { path: "/adminpackages", element: <AdminPackages /> },
];

const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
