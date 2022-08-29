import React from "react";

const Suggestion = ({ name, url }) => {
  return (
    <div className="bg-[#3A3A3A] px-4 mb-4">
      <div>
        <img src={url} className="rounded-full mx-auto mt-6"></img>
      </div>
      <div>{name}</div>
      <div className="text-center p-2 bg-[#38BDF8] text-black rounded-md px-auto mb-4">
        Check
      </div>
    </div>
  );
};

export default Suggestion;
