const postUser = async(user) => {
    const res = await
    fetch('https://gorest.co.in/public-api/users',
    {
        method:'POST',
        headers : {
        'Content-Type': 'application/json' ,
        'Authorization':'Bearer 9d8224224d0da981dc6768d900f96f7e7f5987d55971546ca180338c227e6c95'    
        },
        body: JSON.stringify(user),
    })
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

export default postUser
