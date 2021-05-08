import React from 'react'
import { useState, useEffect } from 'react';

const fetchUsers = async() => {
    const res = await fetch('https://gorest.co.in/public-api/users?page=1',{})
    const data = await res.json()
    return data.data
}

export default fetchUsers
