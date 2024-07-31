import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  // For development process, this will be modified as react query will grab the user credentials.

  const isAuthenticated = false;

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;
