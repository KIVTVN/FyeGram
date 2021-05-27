import React from "react";
import useStorage from "../hooks/useStorage";

const ProgressBar = ({ photo, setPhoto }) => {
  const { url, progress } = useStorage(photo);
  return (
    <div className="progress-bar" style={{ width: progress + "%" }}>
      progress
    </div>
  );
};

export default ProgressBar;
