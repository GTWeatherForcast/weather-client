import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LandingPage from "./components/landing/Landing";
import ComponentTestPage from "./components/demo/ComponentTest";
import ErrorPage from "./components/error-pages/ErrorPage";
import MainPage from "./components/main-page/MainPage";

// import "./App.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/test",
    element: <ComponentTestPage />,
  },
  {
    path: "login",
    element: <LandingPage initialCardIndex={0} />,
  },
  {
    path: "signup",
    element: <LandingPage initialCardIndex={2} />,
  },
  {
    path: "mainpage",
    element: <MainPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
