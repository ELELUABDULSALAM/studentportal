import React, { useEffect } from "react";

function Result() {
  const checkStatus = () => {
    const getToken = localStorage.getItem("token");
  };

  useEffect(() => {
    // checkStatus();
    const getToken = localStorage.getItem("token");
    console.log(getToken);
  }, []);
  return <div>Result</div>;
}

export default Result;
