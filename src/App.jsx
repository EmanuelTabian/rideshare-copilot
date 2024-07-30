import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import GlobalStyles from "./styles/GlobalStyles";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppLayout from "./ui/AppLayout";
import Cars from "./pages/Cars";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CarDetails from "./pages/CarDetails";
import Calculator from "./pages/Calculator";
import Dashboard from "./pages/Dashboard";
import Documents from "./pages/Documents";
import Settings from "./pages/Settings";
import MyPosts from "./pages/MyPosts";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },

  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/cars",
        element: <Cars />,
      },
      {
        path: "/cars/:carId",
        element: <CarDetails />,
      },
      {
        path: "/cars/myposts",
        element: <MyPosts />,
      },
      {
        path: "/calculator",
        element: <Calculator />,
      },
      {
        path: "/documents",
        element: <Documents />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyles />
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
