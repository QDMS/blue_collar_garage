import React from "react";

export const ProjectVideoCard = ({ vidUrl }) => {
  return (
    <div className="video-wrapper">
      <iframe
        title="Facebook Video"
        src={vidUrl}
        width="500"
        height="978"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameBorder="0"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};