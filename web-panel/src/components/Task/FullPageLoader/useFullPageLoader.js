import React, { useState } from "react";
import Loader from "./Loader";

export const useFullPageLoader = () => {
  const [loading, setLoading] = useState(false);

  return [
    loading ? <Loader /> : null,
    () => setLoading(true), //Show loader
    () => setLoading(false), //Hide Loader
  ];
};
