import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddUser = () => {
    const navigate = useNavigate()
    const handleAddUser = async (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const user = { name, email }
        try {
            await axios.post("http://localhost:5000/users", user);
            console.log("User created successfully");
            form.reset()
            navigate("/all-users")

        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div className='flex h-screen items-center justify-center'>
            <form className='' onSubmit={handleAddUser}>
                <input type="text" name="name" id="name" required placeholder='your name' />
                <br />
                <input type="text" required name="email" id="email" placeholder='your email' />
                <br />
                <button type='submit'>Add user</button>
            </form>
        </div>
    )
}

export default AddUser