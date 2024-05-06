import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";
import { demoChannelTitle, demoProfilePicture } from "../utils/constants";

const ChannelCard = ({ channelDetails }) => {
  return (
    <NavLink to={`/channel/${channelDetails?.id?.channelId}`}>
      <div
        className="card  mb-xs-5 mb-md-2 mt-5 m-auto rounded-top"
        style={{ width: "18rem", borderWidth: "0" }}
      >
        <div className="channelPic bg-dark p-2">
          <img
            className="card-img-top rounded-circle"
            src={
              channelDetails?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            alt={channelDetails?.snippet?.title}
          />
        </div>

        <div className="card-body bg-dark text-center">
          <NavLink
            className="card-title text-light d-block  channelTitle fs-5 fw-bold"
            to={`/channel/${channelDetails?.snippet?.channelId}`}
          >
            {channelDetails?.snippet?.channelTitle || demoChannelTitle}{" "}
            <FontAwesomeIcon icon={faCheckCircle} className="text-primary" />
          </NavLink>

          {channelDetails?.statistics?.subscriberCount && (
            <span className="text-light">
              {" "}
              {parseInt(
                channelDetails?.statistics?.subscriberCount
              ).toLocaleString()}{" "}
              Subsribers{" "}
            </span>
          )}
        </div>
      </div>
    </NavLink>
  );
};

export default ChannelCard;
