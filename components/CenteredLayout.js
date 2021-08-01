import React from "react";

const CenteredLayout = ({ children }) => {
  return (
    <div className="flex items-center min-h-screen">
      <div className="container mx-auto">
        <div className="max-w-md mx-auto my-10">{children}</div>
      </div>
    </div>
  );
};

export default CenteredLayout;
