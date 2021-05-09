import './homepage.css'
import UserTable from '../table/table'
import './homepage'
import Pagination from '../pagination/pagination'
import { useState, useEffect } from 'react';

const UserRegistry = () => {
    const [pageNo, setPageNo] = useState()

    const onEnter = (onPage) => {
        if(onPage !== null)
        {
            setPageNo(onPage)
            console.log(pageNo)
        }
    }

    return (
        <div>
        <div className = "sidebar"/>
        <UserTable pageNo = {pageNo}/>
        <Pagination onPage = {onEnter}/>
        </div>
    )
}

export default UserRegistry