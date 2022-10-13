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
    <div className='text-danger lead'>

        <input type='text' onChange={(e)=>setserachTerm(e.target.value)} className='btn btn-outline-light' value={serachTerm} />

        <button className='btn btn-danger' onClick={handleSubmit}>
            <FontAwesomeIcon icon={faSearch} />
        </button> 

    </div>
)
}
