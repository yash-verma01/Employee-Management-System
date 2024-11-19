import React, { useState } from "react";
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPasswordl] = useState('');

    const submitHandler = (e) => {
        e.preventDefault()
        console.log("email", email)
        console.log("pass", password)
        setEmail('')
        setPasswordl('')

    }

    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <div className="border-2 border-black p-9 rounded-3xl">
                <form onSubmit={(e) => { submitHandler(e) }} className="flex flex-col items-center justify-center">
                    <input value={email} onChange={(e) => { setEmail(e.target.value) }} required className=" border-2  border-black rounded-full py-1 text-xl px-2 m-2 size-1900" type="email" placeholder="Enter your email" />
                    <input required value={password} onChange={(e) => { setPasswordl(e.target.value) }} className=" border-2 border-black rounded-full py-1 text-xl px-2 m-2" type="password" placeholder="Enter your password" />
                    <button className=" border-2 border-green-600 rounded-full py-1 text-l px-5 m-2 bg-green-600">Login</button>

                </form>
            </div>

        </div>
    )
}
export default Login;