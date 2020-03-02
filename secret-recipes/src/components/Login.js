import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const LogIn = () => {
    const [loginInfo, setLoginInfo] = useState({
        username: '',
        password: ''
    })

    const handleChange = e => {
        setLoginInfo({...loginInfo, [e.target.name]: e.target.value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(loginInfo);
        setLoginInfo({
            username: '',
            password: ''
        })
    }

    return (
        <div>
            <h2>LogIn</h2>
            <form>
                <TextField required label='Username' id='username' name='username' onChange={handleChange} />
                <br />
                <TextField required label='Password' id='password' name='password' onChange={handleChange} />
                <br />
                <br />
                <Button type='submit' variant='contained' color='primary' onClick={handleSubmit}>Log In</Button>
            </form>
            <br />
        </div>
    )
}

export default LogIn