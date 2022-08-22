import React from "react";

const Post = ({ person, org, text }) => {
  return (
    <div className="mt-8">
      <div>
        {person} &gt; {org}
      </div>
      <div>{text}</div>
    </div>
  );
};

export default Post;
