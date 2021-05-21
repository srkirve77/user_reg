const fetchUsers = async(pageNo) => {
    const res = await fetch('https://gorest.co.in/public-api/users?page='+pageNo,{})
    const data = await res.json()
    if(parseInt(data.code/100)!==2) {
        var i;
        var msg = ""
        for(i = 0 ; i < data.data.length ; i++) {
            msg = msg + data.data[i].field +" "+data.data[i].message +","
        }
        alert(msg)
    }
    return data
}

export default fetchUsers
