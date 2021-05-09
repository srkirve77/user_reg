import './homepage.css'
import UserTable from '../table/table'
import './homepage'
import Pagination from '../pagination/pagination'
import { useState, useEffect } from 'react';

const UserRegistry = () => {
    const [pageNo, setPageNo] = useState(1)
    const [totalPages, setTotalPage] = useState(70)

    const onEnter = (onPage) => {
        console.log(onPage)
        setPageNo(onPage)    
    }

    const onTotalPage = (getTotalPages) => {
        setTotalPage(getTotalPages)
    }

    return (
        <div>
        <div className = "sidebar"/>
        <UserTable pageNo = {pageNo} getTotalPages = {onTotalPage}/>
        <Pagination onPage = {onEnter} currentPage = {pageNo} totalPages = {totalPages}/>
        </div>
    )
}

export default UserRegistry