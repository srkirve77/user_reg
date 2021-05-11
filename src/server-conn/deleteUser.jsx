const deleteUser = async (id) => {
    const res = await
        fetch('https://gorest.co.in/public-api/users/'+id,
        {
            method:'DELETE',
            headers : {
            'Content-Type': 'application/json' ,
            'Authorization':'Bearer 9d8224224d0da981dc6768d900f96f7e7f5987d55971546ca180338c227e6c95'    
            }
        })
    const data = await res.json()
    console.log(data)
}

export default deleteUser