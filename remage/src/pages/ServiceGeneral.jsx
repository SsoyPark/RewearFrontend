import React from "react";
import { useState } from "react";
import Button from "../components/common/Button";
import { useNavigate } from "react-router-dom";
import "../index.css"
// import "./ServiceGeneral.css"

const ServiceGeneral = () => {
  const navigate = useNavigate();
  const [selectedUserType, setSelectedUserType] = useState("general");

  return (
    <div className="content service-general-page">

    </div>
  );
};

export default ServiceGeneral;