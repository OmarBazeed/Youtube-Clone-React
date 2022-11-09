import React from 'react';
import { categories } from '../utils/constants';

export default function Sidebar({selectedCategory,setSelectedCategory,overflowY}) {

return (
        <div className='col-md-2 d-flex flex-md-row flex-lg-column mySidebar pt-lg-4' style={{height:'calc(100vh - 65px)',borderRight:'1px solid white',overflowY}}>
            {
                    categories.map((el)=>{
                    return (
                        <button 
                        key={Math.random()} 
                        className='btn btn-outline-danger me-2 mb-2'
                        style={{ background: `${el.name === selectedCategory ? 'red':''}` }} 
                        onClick= {()=>{setSelectedCategory(el.name)}}
                        >
                        <span className='me-2' style={{color:`${el.name === selectedCategory?'white':''}`}}> {el.icon} </span> 
                        <span className='text-white' >{el.name}</span> 
                        </button>
                    )
                })
            }
            <p className='text-light mt-lg-3 sidebarPara'>copyRight 2022 &copy; <br />  Omar Bazeed </p>
        </div>
)
}
