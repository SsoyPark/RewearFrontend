import React from "react";
import { useState } from "react";
import Button from "../components/common/Button";
import { useNavigate } from "react-router-dom";
import "../index.css"

const ServiceGeneralWrite = () => {
  const navigate = useNavigate();
  const [selectedUserType, setSelectedUserType] = useState("general");

  return (
    <div className="content service-general-page">

    </div>
  );
};

export default ServiceGeneralWrite;