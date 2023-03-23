import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Formpage.css"

const Signinpage = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [error,setError] = useState(false)

    const handleSubmit=(e)=> {
        e.preventDefault();
        if(email.length == 0 || password.length == 0){
          setError(true)
        }        
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
                                    <div class="block">
                                        <input type="email" placeholder="Alamat email" class="my-2 border-solid border-2 rounded-sm w-full" onChange={e=>setEmail(e.target.value)} />
                                        {error?<small className="text-buttonColor" >Email harus diisi</small>:""}
                                        <input type="password" placeholder="Password" class="my-2 border-solid border-2 rounded-sm w-full" onChange={e=>setPassword(e.target.value)} />
                                        {error?<small className="text-buttonColor" >Password harus diisi</small>:""}
                                    </div>
                    
                                    <div class="flex gap-2 my-2">
                                        <p>Lupa password?</p>
                                    </div>
                                    <button type="button" href="#" class="bg-buttonColor p-2 rounded-full w-full block self-center my-4 text-white text-center hover:scale-110 duration-200 shadow-lg" onClick={handleSubmit}>Masuk</button>
                                    <button type="button" href="#" class="border-buttonColor border-2 p-2 rounded-full w-full block self-center my-4 text-buttonColor text-center hover:scale-110 duration-200 shadow-lg">Masuk dengan Google</button>
                                    <div>
                                        Belum punya akun?<span><Link to="/signuppage" class="text-buttonColor"> Daftar disini</Link></span>
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