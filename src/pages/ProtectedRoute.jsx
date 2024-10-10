import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  const { isLoading, user } = useUser();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!user && !isLoading) navigate("/login");
    },
    [user, isLoading, navigate]
  );

  if (user) return children;
}

export default ProtectedRoute;
