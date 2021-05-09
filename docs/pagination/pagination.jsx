import React from 'react'
import './pagination.css'
import { useState, useEffect } from 'react';
import fetchUsers from '../server-conn/fetchUsers'

const Pagination = ({onPage}) => {
   
    const getPage = (pageNo) => {
        onPage(parseInt(pageNo))
    }

    return (
        <div className = "pagination">
            page &nbsp;
            <input type = "text" className = "pageinput" onChange = {(e) => getPage(e.target.value)} ></input>
            &nbsp; of 70
        </div>
    )
}

export default Pagination
