import React, {Component} from 'react'
import axios from 'axios';

class Auth extends Component {
    constructor(){
        super()
        this.state={
            username: '',
            password: ''
        }
    }
    handleRegister = () => {
        const {username, password} = this.state;
        axios.post('/api/register', {username, password}).then(res => {
            this.props.getUser(res.data)
            this.props.history.push('/dashboard')
        })
    }
    handleLogin = () => {
        axios.post('/api/login', 
        {username: this.state.username,
        password: this.state.password}).then(res => {
            this.props.getUser(res.data)
            this.props.history.push('/dash')
        })
    }

    render(){
        return(
            <div>
                <input
                placeholder='Enter Username'
                name='username'/>
                <input
                placeholder='Enter Password'
                name='password'/>

                <button onClick={this.handleLogin}
                >Login</button>
                <button onClick={this.handleRegister}>Register</button>
            </div>
        )
    }

}

export default Auth