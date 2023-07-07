import React from "react";

const Loading = () => {
  return (
    <div className="absolute  w-screen h-screen flex justify-center items-center bg-black z-50">
      <span className="loader"></span>
    </div>
  );
};

export default Loading;
