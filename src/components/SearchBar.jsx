import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {  useNavigate } from 'react-router-dom';



export default function SearchBar() {

    const navigate = useNavigate();
    const[serachTerm,setserachTerm] = useState('');

    const handleSubmit = ()=>{
        navigate(`/search/${serachTerm}`);
        setserachTerm('');
    }

return (
    <React.Fragment>
        <form onSubmit={handleSubmit} className='searchForm'>
            <input type='text' onChange={(e)=>setserachTerm(e.target.value)} className='btn btn-light searchInput' value={serachTerm}  />

            <button className='btn btn-danger searchBtn' >
                <FontAwesomeIcon icon={faSearch} />
            </button> 
        </form>
    </React.Fragment>
)
}
