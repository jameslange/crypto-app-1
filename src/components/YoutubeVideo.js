import React from "react";

const YoutubeVideo = () => {
  return (
    <iframe
      width="750"
      height="500"
      className="max-w-full px-10"
      src="https://www.youtube.com/embed/97ufCT6lQcY?start=0"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  );
};

export default YoutubeVideo;
