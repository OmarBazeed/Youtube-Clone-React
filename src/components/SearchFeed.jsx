import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import {Videos} from './';

export default function SearchFeed() {

const [videos , setVideos] = useState([]);
const {serachTerm} = useParams();

useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${serachTerm}`).then(data=>setVideos(data.items))
},[serachTerm])


return (
<div className='container-fluid mt-0 text-center' style={{background:'black'}}>

    <p className='text-light fs-4 fw-bold mb-4'>You Are Searching For : <span className='text-danger'> {serachTerm}</span> </p>
    <div className='row justify-content-between'>
            <Videos videos={videos} height='100%'  /> 
    </div>

</div>
)
}
