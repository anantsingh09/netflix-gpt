import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="font-bold text-4xl ">{title}</h1>
      <p className="w-1/3 py-6 text-lg">{overview}</p>
      <div>
        <button className="bg-white text-black rounded-lg p-2 px-10 hover:bg-opacity-80">
          {"▶️ Play"}
        </button>
        <button className="bg-gray-600 text-white rounded-lg p-2 px-10 m-2 hover:bg-opacity-80">
          {"More Info"}
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
