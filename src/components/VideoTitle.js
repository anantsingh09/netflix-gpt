import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-8 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="font-bold md:text-4xl text-xl">{title}</h1>
      <p className="hidden md:block w-1/3 py-6 text-lg">{overview}</p>
      <div className="my-2 flex flex-row">
        <button className="bg-white text-black rounded-lg py-1 px-1 md:px-10 hover:bg-opacity-80">
          {"▶️ Play"}
        </button>
        <button className="hidden md:block bg-gray-600 text-white rounded-lg md:p-2 px-10 m-2 hover:bg-opacity-80">
          {"More Info"}
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
