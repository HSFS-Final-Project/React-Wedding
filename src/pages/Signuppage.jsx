import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Signuppage.css"

const Signuppage = () => {
    const email = document.getElementById('email');
    const errEmail = document.getElementById('errEmail');
    const wanita = document.getElementById('wanita');
    const errWanita = document.getElementById('errWanita');
    const pria = document.getElementById('pria');
    const errPria = document.getElementById('errPria');
    const password = document.getElementById('password');
    const errPass = document.getElementById('errPass');
    const checkBox = document.getElementById('checkBox');

    
    
    
    const handleClick = () => {
        if (email.value == "") {
            errEmail.classList.remove('hidden');
        } else {
            errEmail.classList.add('hidden');   
        };
    
        if (wanita.value == "") {
            errWanita.classList.remove('hidden');      
        } else {
            errWanita.classList.add('hidden');
        };
    
        if (pria.value == "") {
            errPria.classList.remove('hidden');
        } else {
            errPria.classList.add('hidden');
        };
    
        if (password.value == "") {
            errPass.classList.remove('hidden');
        } else {
            errPass.classList.add('hidden');
        };
    
        if (email.value, pria.value, wanita.value, password.value != "" && checkBox.checked == false) {
            alert('Harap menyetujui syarat penggunaan');
        };
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
                    <div class="text-2xl font-bold my-6">Register</div>           
                    <div class="mt-4">
                      <p class="my-2">Daftar akun terlebih dahulu untuk membuat undangan pernikahan digital mu </p>
                      <div class="block">
                        <input type="email" placeholder="Alamat email" class="my-2 border-solid border-2 rounded-sm w-full" id="email" />
                        <small class="hidden text-buttonColor" id="errEmail">Email harus diisi</small>
                        <input type="text" placeholder="Nama panggilan wanita" class="my-2 border-solid border-2 rounded-sm w-full" id="wanita" />
                        <small class="hidden text-buttonColor" id="errWanita">Nama wanita harus diisi</small>
                        <input type="text" placeholder="Nama panggilan pria" class="my-2 border-solid border-2 rounded-sm w-full" id="pria" />
                        <small class="hidden text-buttonColor" id="errPria">Nama pria harus diisi</small>
                        <input type="password" placeholder="Password" class="my-2 border-solid border-2 rounded-sm w-full" id="password" />
                        <small class="hidden text-buttonColor" id="errPass">Password harus diisi</small>
                      </div>

                      <div class="flex gap-2 my-2">
                        <input type="checkbox" name="" id="checkBox" value="checked" />
                        <p>saya menyetujui syarat penggunaan</p>
                      </div>
                      <button type="button" href="#" class="bg-buttonColor p-2 rounded-full w-full block self-center my-4 text-white text-center hover:scale-110 duration-200 shadow-lg" onClick={handleClick}>Buat Sekarang</button>
                      <button type="button" href="#" class="border-buttonColor border-2 p-2 rounded-full w-full block self-center my-4 text-buttonColor text-center hover:scale-110 duration-200 shadow-lg">Daftar dengan Google</button>
                      <div>
                        Sudah ada akun?<span><Link to="/signinpage" class="text-buttonColor"> log in disini.</Link></span>
                      </div>
                    </div>  
                  </div>
                </div>
              </div>
            </div>
        </div>
    )
}

export default Signuppage;