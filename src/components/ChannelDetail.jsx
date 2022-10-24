import React ,{useState , useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import {ChannelCard , Videos } from './';



export default function ChannelDetail() {

const {id} = useParams();
const [channelDetails , setChannelDetails] = useState(null);
const [videos , setVideos] = useState([])

useEffect(()=>{
  fetchFromAPI(`channels?part=snippet&id=${id}`).then(data=>setChannelDetails(data?.items[0]));

  fetchFromAPI(`search?part=snippet&order=date&channelId=${id}`).then(data=>setVideos(data?.items));
},[id])

  return (
    <>
      <div style={{height:'300px',background:'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)'}}></div>

      <div className='d-flex flex-column justify-content-center align-items-center '>
          <div className='text-start rounded-circle' style={{marginTop:'-100px'}}>
            <ChannelCard channelDetails={channelDetails}  /> 
          </div>

          <div className='text-center'> 
            <Videos videos={videos} width='90%' margin='auto' height=''   /> 
          </div>
      </div>
    </>
  )
}
