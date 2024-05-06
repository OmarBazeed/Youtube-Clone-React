import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos } from "./";

export default function VideoDetail() {
  const { id } = useParams();
  const [videoDetails, setvideoDetails] = useState(null);
  const [videos, setvideos] = useState(null);

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setvideoDetails(data.items[0])
    );

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setvideos(data.items)
    );
  }, [id]);

  if (!videoDetails?.snippet)
    return <p className="text-danger text-center">Loading...</p>;

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetails;

  return (
    <div
      className="row justify-content-between"
      style={{
        height: { xs: "100%", md: "93vh" },
        width: "95%",
        margin: "auto",
      }}
    >
      <div className="col-xs-9 col-md-9 mb-xs-4">
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${id}`}
          controls
          className="react-player videoShow"
        />
        <div>
          <p className="text-dark fs-4">{title}</p>

          <div className="d-flex justify-content-between align-items-center">
            <p className="fw-bold m-0">
              <Link to={`/channel/${channelId}`}>
                {channelTitle} <FontAwesomeIcon icon={faCheckCircle} />
              </Link>
            </p>
            <div className="d-flex ">
              <span className="me-4">
                {parseInt(viewCount).toLocaleString()} views
              </span>
              <span>{parseInt(likeCount).toLocaleString()} likes</span>
            </div>
          </div>
        </div>
      </div>

      <div
        className="col-xs-3 col-md-3 videosList"
        style={{ height: "93vh", overflowY: "scroll" }}
      >
        <Videos videos={videos} />
      </div>
    </div>
  );
}

// اللهم لك الحمد كما ينبغى لجلال وجهك وعظيم سلطانك
// الحمد لله حمداً ملئ السموات و الارض
// الحمد لله حمداً طيباً مباركاً فيه
// الحمد لله عدد ما كان و عدد ما يكون و عدد الحركات و السكون
// الحمد لله تطيب به النفوس
// الحمد لله حتى يرضى و الحمد لله عند الرضى و الحمد لله بعد الرضى
// الحمد لله حمداً كثيراً
// الحمد لله حتى يبلغ الحمد منتهاه
// اللهم انى استودعك ما حفظت و ما قرات و ما كتبت و ما فهمت امانه و وديعه عندك و اسالك اللهم ان ترده على عند حاجتى اليه فانت حسبى و نعم الوكيل
// الحمد لله دائماً و ابداً
