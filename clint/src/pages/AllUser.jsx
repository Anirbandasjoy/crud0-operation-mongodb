import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const AllUser = () => {
    const [users, setUsers] = useState([])
    const fetchUsers = async () => {
        const { data } = await axios.get("http://localhost:5000/users")
        setUsers(data)

    }
    useEffect(() => {
        fetchUsers()

    }, [])

    const handleDeleteUser = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/users/${id}`)
            console.log("user deleted successfully")
            const filterUser = users.filter(user => user._id !== id)
            setUsers(filterUser)
        } catch (error) {
            console.log(error)
        }

    }
    return (
        <div>
            {
                users.map((user) => {
                    return <div key={user._id} className='border flex justify-between items-center space-y-2 p-4 border-red-500'>
                        <div>
                            <h1>{user.name}</h1>
                            <p>{user.email}</p>
                        </div>
                        <div className='flex items-center justify-center gap-5'>
                            <Link state={user} to={`/update-user/${user._id}`} className='text-2xl btn btn-primary'>update</Link>
                            <button onClick={() => handleDeleteUser(user._id)} className='text-2xl btn btn-error'>X</button>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default AllUser