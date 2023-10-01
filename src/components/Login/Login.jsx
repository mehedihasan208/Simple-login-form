import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../Firebase/conflict.firebase";
import { useState } from "react";


const Login = () => {

    const [useError, setUseError] = useState('');
    const [success, setSuccess] = useState('');

    const handelOnSubmit = e =>{
        e.preventDefault();
   const email=e.target.email.value;
   const password = e.target. password.value;
   console.log(email,password)

   
        //reset error
        setUseError('')
        setSuccess('');

    //  creat user
    createUserWithEmailAndPassword(auth,email,password)
    .then(result=>{
     console.log(result.user)
     setSuccess("User Login successfully")
    } )
    .catch(error=>{
     console.error(error)
     setUseError('User alrady in Exist')
    })

}

const handleForgetPassword = e =>{
    console.log('hello world and me also hello')
}


    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handelOnSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" name="email"/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered" name="password"/>
                <label className="label">
                  <a onClick={handleForgetPassword} href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              </form>
              {
            useError && <p className="text-red-700 text-xl font-semibold">{useError}</p>
        }
        {
            success && <p className="text-green-600 text-xl font-semibold">{success}</p>
        }
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;