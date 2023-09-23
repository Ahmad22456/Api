import axios from "axios"
import { useEffect, useState } from "react"


function UserList() {
    
    const [users, setUsers] = useState([])
    // eslint-disable-next-line no-unused-vars
    const [error, setError] = useState(null)
    
    function getData() {
        axios.get('https://jsonplaceholder.typicode.com/users').then(function (response) {
            setUsers(response)
        }).catch(function (error) {
            setError(error)
        })
    }

    useEffect(() => {getData()}, [])

    console.log(users.data[0])

    return (
        <div>:</div>
    )
}

export default UserList