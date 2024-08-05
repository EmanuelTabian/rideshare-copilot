import { Navigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";

function ProtectedRoute({ children }) {
  // For development process, this will be modified as react query will grab the user credentials.
  const { isLoading, user } = useUser();
  console.log(user);

  const isAuthenticated = false;

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;
