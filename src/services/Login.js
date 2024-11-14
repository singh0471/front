import axios from 'axios';

async function Login(loginData) {
    const response = await axios.post('http://localhost:4000/api/v1/user/login', loginData)
    return response;
}

export default Login