import React from 'react'
import {VideoCard,ChannelCard} from './'


export default function Videos({videos,selectedCategory,overflowX,overflowY,height,width,margin}) {

if(!videos?.length) return (<p className='text-danger text-center'>Loading...</p>)

return (
    <div className='text-light myVideosCom' style={{height,overflowY,overflowX,width,margin}}>
        <div className='text-light'> 
            <span className='fw-bold fs-2'> {selectedCategory} </span>
            <span className='fw-bold fs-2 text-danger'> Videos </span>
        </div>

        <div className='row justify-content-xs-center bg-dark'>
            {videos.map((item,i)=>{
                return(
                    <div key={i} className='col-xs-12 col'  >
                        {item.id.videoId && <VideoCard video={item} />}
                        {item.id.channelId && <ChannelCard channelDetails={item} marginTop='' />}
                    </div>
                )
            })}
        </div>
    </div>
)

}

