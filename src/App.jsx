import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import GlobalStyles from "./styles/GlobalStyles";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import toast, { ToastBar, Toaster } from "react-hot-toast";
import { HiMiniXMark } from "react-icons/hi2";

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
import PasswordReset from "./pages/PasswordReset";
import ProtectedRoute from "./pages/ProtectedRoute";
import PageNotFound from "./pages/PageNotFound";

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
  // Comment out password reset as it doens't take part of the MVP
  // {
  //   path: "/password-reset",
  //   element: <PasswordReset />,
  // },
  {
    path: "*",
    element: <PageNotFound />,
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "",
        element: <Navigate replace to="dashboard" />,
      },
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
      // Temporarily deactivate documents section as it doesn't take part of the MVP
      // {
      //   path: "/documents",
      //   element: <Documents />,
      // },
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
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: { duration: 3000 },
          error: { duration: 5000 },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
          },
        }}
      >
        {(t) => (
          <ToastBar toast={t}>
            {({ icon, message }) => (
              <>
                {icon}
                {message}
                {t.type !== "loading" && (
                  <HiMiniXMark onClick={() => toast.dismiss(t.id)} />
                )}
              </>
            )}
          </ToastBar>
        )}
      </Toaster>
    </QueryClientProvider>
  );
}

export default App;
