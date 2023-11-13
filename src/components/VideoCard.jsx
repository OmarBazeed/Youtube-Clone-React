import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { demoVideoUrl , demoVideoTitle ,demoChannelUrl , demoChannelTitle } from '../utils/constants';

const VideoCard = ( { video:{ id:{videoId} , snippet } } ) => {
return (
    <NavLink to={videoId ?`/video/${videoId}`: demoVideoUrl } >
        <div className="card mb-2" style={{width:"18rem",margin:'auto'}}>
            <img  className="card-img-top"  src={snippet?.thumbnails?.high?.url} alt={snippet?.title} />

            <div className="card-body" style={{background:'#9e9e9e'}}>
                <NavLink className='card-title text-light d-block fw-bold videoTitle'  to={videoId ? `/video/${videoId}`: demoVideoUrl } >
                {snippet?.title?.slice(0,50) || demoVideoTitle.slice(0,50)} 
                </NavLink>

                <NavLink className='card-title text-secondary d-block  channelTitle'  to={ snippet?.channelId ? `/channel/${snippet?.channelId}`: demoChannelUrl } >
                {snippet?.channelTitle || demoChannelTitle} <FontAwesomeIcon icon={faCheckCircle} className='text-primary' />   
                </NavLink>
            </div>
        </div>
    </NavLink>
)
}

export default VideoCard

