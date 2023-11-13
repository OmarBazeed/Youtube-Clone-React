import React, { useEffect, useState } from "react";
import { Sidebar, Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

export default function Feed() {
  const [videos, setVideos] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("New");

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);

  return (
    <div
      className="container-fluid"
      style={{ background: "black", marginTop: "65px" }}
    >
      <div className="row justify-content-between">
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          overflowY="scroll"
        />

        <div className="col-md-10">
          <Videos
            videos={videos}
            selectedCategory={selectedCategory}
            overflowY="auto"
            overflowX="hidden"
            height="93vh"
            width=""
            margin=""
          />
        </div>
      </div>
    </div>
  );
}
