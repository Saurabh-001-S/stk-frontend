import React from "react";
import Navbar from "../Component/Navbar";
import Entryform from "../Component/Entryform";

const Edit: React.FC = () => {
  return (
    <div>
      <Navbar />
      {/* @ts-ignore */}
      <Entryform />
    </div>
  );
};

export default Edit;
