import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const SignUp = () => {
    const [userInfo, setUserInfo] = useState({
        id: Date.now(),
        name: '',
        email: '',
        username: '',
        password: ''
    })

    const handleChange = e => {
        setUserInfo({...userInfo, [e.target.name]: e.target.value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(userInfo);
    }

    return (
        <div>
            <h2>Sign Up</h2>
            <form>
                <TextField label='Name' id='name' name='name' onChange={handleChange} />
                <br />
                <TextField label='Email' id='email' name='email' onChange={handleChange} />
                <br />
                <TextField required label='Username' id='username' name='username' onChange={handleChange} />
                <br />
                <TextField required label='Password' id='password' name='password' onChange={handleChange} />
                <br />
                <br />
                <Button type='submit' variant='contained' color='primary' onClick={handleSubmit}>Sign Up</Button>
            </form>
            <br />
        </div>
    )
}

export default SignUp