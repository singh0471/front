import React,{useState} from 'react'
import axios from 'axios'
function Login() {
    const [formData,setFormData] = useState({});

    const loginHandler = async (event) => {
        event.preventDefault();
        
        const loginData = {
            username:formData.username,
            password:formData.password
        }

        try{
            // const response = await axios.post('http://localhost:4000/api/v1/user/login', loginData)
            
            const response =  Login(loginData)
            const token = response.data;

            if(token){
                localStorage.setItem('token',token)
                console.log('bearer token stored in local storage ',token)

            }
            else{
                console.log('no token found')
            }
        }
        catch(error){
            console.log(error);
        }
    }

  return (
    <div>
        <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label" >username</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>{setFormData(
      (prev) =>{return{
        ...prev,username:e.target.value
      }}
    )}}/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label" >Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e)=>{setFormData((prev) =>{return{
        ...prev,password:e.target.value
      }})}}/>
  </div>
  <div className="mb-3 form-check">
  </div>
  <button type="submit" className="btn btn-primary" onClick={loginHandler}>Submit</button>
</form>

<p>username : {formData.username}</p>
<p>password : {formData.password}</p>
    </div>
  )
}

export default Login