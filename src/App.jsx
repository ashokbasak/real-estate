import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import SinglePage from "./pages/singlePage/SinglePage";
import ProfilePage from "./pages/profile/ProfilePage";
import LoginPage from "./pages/login/LoginPage";
import Register from "./pages/register/Register";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/list",
          element: <List />,
        },
        {
          path:"/:id",
          element:<SinglePage />
        },
        {
          path:"/profile",
          element:<ProfilePage />
        },
        {
          path:"/login",
          element:<LoginPage />
        },
        {
          path:"/register",
          element:<Register />
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
