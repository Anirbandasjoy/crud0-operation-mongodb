import axios from 'axios'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const UpdateUser = () => {
    const navigate = useNavigate()

    const hanleUpdateUser = async (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const user = { name, email }

        try {
            await axios.put(`http://localhost:5000/users/${state._id}`, user)
            console.log("user updated successfully")
            form.reset()
            navigate("/all-users")
        } catch (error) {
            console.log(error.message)
        }
    }
    const { state } = useLocation();

    return (
        <div className='flex h-screen items-center justify-center'>
            <form className='' onSubmit={hanleUpdateUser}>
                <input type="text" defaultValue={state.name} name="name" id="name" required placeholder='your name' />
                <br />
                <input type="text" defaultValue={state.email} required name="email" id="email" placeholder='your email' />
                <br />
                <button type='submit ' className='btn' >update user</button>
            </form>
        </div>
    )
}

export default UpdateUser