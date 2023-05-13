import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Formpage.css"
import axios from "axios";

const Signinpage = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [error,setError] = useState("")

    useEffect(() => {
        setError("")
    }, [email, password])

    const handleSubmit= async (e)=> {
        e.preventDefault();
        try {
            const login = await axios.post ("http://localhost:3030/login", {email: email, password: password});
            
        } catch (error) {
            setError(error.response.data.message)
        }
        // if(email.length == 0 || password.length == 0){
        //   setError(true)
        // }        
    }

    return (
        <div>
            <Navbar />
            <div class="mt-20">
                <div class="container px-8 mx-auto">
                    <div class="flex flex-wrap">
                        <div class="flex lg:basis-3/5">
                            <div class="justify-items-center mx-auto">
                                <img src={require("../assets/pic-formpage.png")} alt="image" class="w-80" />
                            </div>
                        </div>

                        <div class="lg:basis-2/5">
                            <div class="">
                                <div class="text-2xl font-bold my-6">Welcome Back</div>
                            
                                <div class="mt-4">
                                    <p>Masukkan Email dan Password yang sudah terdaftar di Our Wedding</p>
                                    <small className="text-buttonColor">{error}</small>
                                    <div class="block">

                                        <input type="email" placeholder="Alamat email" class="my-2 border-solid border-2 rounded-sm w-full" onChange={e=>setEmail(e.target.value)} />
                                        
                                        <input type="password" placeholder="Password" class="my-2 border-solid border-2 rounded-sm w-full" onChange={e=>setPassword(e.target.value)} />
                                        
                                    </div>
                    
                                    <div class="flex gap-2 my-2">
                                        <p>Lupa password?</p><span><Link to="/forgotpass" class="text-buttonColor">Klik disini</Link></span>
                                    </div>
                                    <button type="button" href="#" class="bg-buttonColor p-2 rounded-full w-full block self-center my-4 text-white text-center hover:scale-110 duration-200 shadow-lg" onClick={handleSubmit}>Masuk</button>
                                    <button type="button" href="#" class="border-buttonColor border-2 p-2 rounded-full w-full block self-center my-4 text-buttonColor text-center hover:scale-110 duration-200 shadow-lg">Masuk dengan Google</button>
                                    <div class="flex gap-2 my-2">
                                        <p>Belum punya akun?</p><span><Link to="/signuppage" class="text-buttonColor">Daftar disini</Link></span>
                                    </div>
                                </div>                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signinpage;