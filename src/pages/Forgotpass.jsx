import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Formpage.css"

const Forgotpass = () => {
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
                                <div class="text-2xl font-bold my-6">Lupa Password</div>
                            
                                <div class="mt-4">
                                    <p>Masukkan email Anda dan kami akan mengirimkan link untuk kembali ke akun Anda.</p>
                                    <div class="block">
                                        <input type="email" placeholder="Alamat email" class="my-2 border-solid border-2 rounded-sm w-full" onChange={e=>setEmail(e.target.value)} />
                                        {error?<small className="text-buttonColor" >Email harus diisi</small>:""}                                        
                                    </div>                 
                                    
                                    <button type="button" href="#" class="bg-buttonColor p-2 rounded-full w-full block self-center my-4 text-white text-center hover:scale-110 duration-200 shadow-lg" onClick={handleSubmit}>Lanjutkan</button>
                                                                   
                                </div>                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Forgotpass;