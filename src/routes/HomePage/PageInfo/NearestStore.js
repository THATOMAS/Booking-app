import React from "react";
import { Link } from "react-router-dom";

const NearestStore = () => {
  return (
    <p className="Nearest-Store">
      <Link to="/nearest-store" className="store-link">
        Nearest Store
      </Link>
    </p>
  );
};

export default NearestStore;
