import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import LandingPage from "./components/landing/Landing";
import ComponentTestPage from "./components/demo/ComponentTest";
import ErrorPage from "./components/error-pages/ErrorPage";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <LandingPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/test",
      element: <ComponentTestPage />
    },
    {
      path: "login",
      element: <LandingPage initialCardIndex={0} />
    },
    {
      path: "signup",
      element: <LandingPage initialCardIndex={2}/>
    }
  ]
);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
