import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../Firebase/conflict.firebase";
import { useState } from "react";
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';

const Register = () => {

    const [useError, setUseError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false)

    const handelSubmit = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const accepted = e. target.terms.checked;

        //reset error
        setUseError('')
        setSuccess('');

        if (password.length < 6) {
            setUseError('password must be 6 character')
            return;
        }

            else if(!accepted){
                setUseError('please accepts our tearms and condition')
                return;
            }

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user)
                setSuccess("User creat successfully")
            })
            .catch(error => {
                console.log(error)
                setUseError('User alrady in Exist')
            })


    }

    return (
        <div className="border">
            <div className="mx-auto w-1/2">
                <h3 className="text-3xl font-semibold  mb-4 mt-4">Register Form</h3>
        <form onSubmit={handelSubmit}>
            <input className="w-full mb-4 py-2 px-10 rounded-lg" type="email" name="email" id="" placeholder="Your Email" required /> <br />

            <div className="relative">
            <input
                className="w-full mb-4 py-2 px-10 rounded-lg" type={showPassword ? "text" : "password"}
                name="password"
                placeholder="password"
        required />
    <span className="absolute top-3 right-2" onClick={() => setShowPassword(!showPassword)}>
        {
            showPassword ?
                <BsFillEyeFill></BsFillEyeFill> : <BsFillEyeSlashFill></BsFillEyeSlashFill>
                }
            </span> <br />
            </div>
            <input type="checkbox" name="terms" id="" />
            <label htmlFor=""> Accepts our<a href=""></a> Tarms and condition</label>

            <button className="w-full btn btn-secondary mx-auto mt-4  mb-4">submit</button>
        </form>
        {
            useError && <p className="text-red-700 text-xl font-semibold">{useError}</p>
        }
        {
            success && <p className="text-green-600 text-xl font-semibold">{success}</p>
        }

            </div>
        </div>
    );
};

export default Register;