import { Loading } from "@nextui-org/react";
import React from "react";


const LoadingContext: React.FC<{ }> = ({ }) => {
  return (
    <div className="h-screen w-screen">
      <Loading size="xl" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"/>
    </div>
  );
};

export default LoadingContext;
