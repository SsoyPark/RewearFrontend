import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isTermsAccepted, redirectPath, children }) => {
  if (!isTermsAccepted) {
    alert("잘못된 접근입니다.");
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

export default ProtectedRoute;
