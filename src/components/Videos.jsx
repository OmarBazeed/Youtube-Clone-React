import React from "react";
import { useEffect } from "react";
import { VideoCard, ChannelCard } from "./";

export default function Videos({
  videos,
  selectedCategory,
  overflowX,
  overflowY,
  height,
  width,
  margin,
}) {
  useEffect(() => {
    document.querySelectorAll(".ParticularSectionVideo").forEach((e) => {
      !e.children.length && e.classList.add("hideDiv");
    });
  });

  if (!videos?.length)
    return <p className="text-danger text-center">Loading...</p>;

  return (
    <div
      className="text-light myVideosCom"
      style={{ height, overflowY, overflowX, width, margin }}
    >
      <div className="text-light my-2">
        <span className="fw-bold fs-2"> {selectedCategory} </span>
        <span className="fw-bold fs-2 text-danger"> Videos </span>
      </div>

      <div className="row justify-content-xs-center bg-dark py-3">
        {videos.map((item, i) => {
          return (
            <div key={i} className="col-xs-12 col ParticularSectionVideo mb-2">
              {item.id.videoId && <VideoCard video={item} />}
              {item.id.channelId && (
                <ChannelCard channelDetails={item} marginTop="" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
