import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import SignInPage from "./components/sign-in/SignIn";
import SignUpPage from "./components/sign-up/SignUp";
import LandingPage from "./components/landing/Landing";
import ComponentTestPage from "./components/demo/ComponentTest";
import ErrorPage from "./components/error-pages/ErrorPage";

function App() {
  let showSignIn = false;
  let showSignUp = false;
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <LandingPage />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "login",
            loader: () => {
              showSignIn = true;
              console.log("signin");
              return (<></>);
             },
            element: <SignInPage />
          },
          {
            path: "signup",
            // loader: () => {
            //   showSignUp = true;
            // },
            element: <SignUpPage />
          }
        ],
      },
      {
        path: "/test",
        element: <ComponentTestPage />
      },
    ]
  );

  // return (
  //   <BrowserRouter>
  //     <Routes>
  //       <Route path="" element={<LandingPage />} />
  //       <Route path="sign-in" element={<SignInPage />} />
  //       <Route path="sign-up" element={<SignUpPage />} />
  //       <Route path="test" element={<ComponentTestPage />} />
  //       <Route path="*" element={<NotFoundPage />} />
  //     </Routes>
  //   </BrowserRouter>
  // );

  return (
    <RouterProvider router={router} />
  )
}

export default App;
