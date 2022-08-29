import React from "react";
import NewJoinee from "../components/feed/NewJoinee";
import Post from "../components/feed/Post";
import Suggestion from "../components/feed/Suggestion";

function feed() {
  return (
    <div className="bg-black text-white">
      <div className="text-3xl mx-16">Activity</div>
      <div className="mx-16">
        <NewJoinee joinee="Photog" />
        <Post person="a" org="b" text="c" />
        <div className="text-2xl mt-12">Projects you may like</div>
        <div className="mt-8 flex">
          <Suggestion
            name="Event Name"
            url="https://lh3.googleusercontent.com/ogw/AOh-ky3LZOY78RmxsueM0Xj0umMAKJJ4piVKYXjl_yD_=s32-c-mo"
          />
        </div>
      </div>
    </div>
  );
}

export default feed;
