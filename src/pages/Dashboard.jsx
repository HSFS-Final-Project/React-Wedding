import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Formpage.css"

const Dashboard = () => {
    
    const [nama,setNama] = useState("")
    const [panggilan,setPanggilan] = useState("")
    const [anak,setAnak] = useState("")
    const [ibu,setIbu] = useState("")
    const [ayah,setAyah] = useState("")
    const [namaw,setNamaW] = useState("")
    const [panggilanw,setPanggilanW] = useState("")
    const [anakw,setAnakW] = useState("")
    const [ibuw,setIbuW] = useState("")
    const [ayahw,setAyahW] = useState("")
    const [acara1,setAcara1] = useState("")
    const [tanggal1,setTanggal1] = useState("")
    const [waktu1,setWaktu1] = useState("")
    const [alamat1,setAlamat1] = useState("")
    const [acara2,setAcara2] = useState("")
    const [tanggal2,setTanggal2] = useState("")
    const [waktu2,setWaktu2] = useState("")
    const [alamat2,setAlamat2] = useState("")
    const [error,setError] = useState(false)
    

    const handleSubmit=(e)=> {
      e.preventDefault();
      if(nama.length == 0 || panggilan.length == 0  || anak.length == 0 || ibu.length == 0 || ayah.length == 0 || namaw.length == 0 || panggilanw.length == 0  || anakw.length == 0 || ibuw.length == 0 || ayahw.length == 0 || acara1.length == 0 || tanggal1.length == 0 || waktu1.length == 0 || alamat1.length == 0 || acara2.length == 0 || tanggal2.length == 0 || waktu2.length == 0 || alamat2.length == 0) {
        setError(true)
      }      
    }
         
       
    return (
        <div>
            <Navbar />
            <div className="mt-20">
              <div className="container px-8 mx-auto">
                <div className="flex flex-wrap justify-center">
                  <div>
                    <div className="text-2xl font-bold my-6 text-center">Input Data Undangan
                    </div>           
                    <div className="mt-4">
                      <p className="text-lg font-bold my-2">Data Pengantin Pria</p>
                      <form className="block" >
                        <input type="text" placeholder="Nama" className="my-2 border-solid border-2 rounded-sm w-full" onChange={e=>setNama(e.target.value)} />
                        {error?<small className="text-buttonColor" >Nama harus diisi</small>:""}
                        <input type="text" placeholder="Nama Panggilan" className="my-2 border-solid border-2 rounded-sm w-full" onChange={e=>setPanggilan(e.target.value)} />
                        {error?<small className="text-buttonColor" >Kolom harus diisi</small>:""}
                        <input type="text" placeholder="Anak ke-" className="my-2 border-solid border-2 rounded-sm w-full" onChange={e=>setAnak(e.target.value)} />
                        {error?<small className="text-buttonColor" >Kolom harus diisi</small>:""}
                        <input type="text" placeholder="Nama Ibu" className="my-2 border-solid border-2 rounded-sm w-full" onChange={e=>setIbu(e.target.value)} />
                        {error?<small className="text-buttonColor" >Nama ibu harus diisi</small>:""}
                        <input type="text" placeholder="Nama Ayah" className="my-2 border-solid border-2 rounded-sm w-full" onChange={e=>setAyah(e.target.value)} />
                        {error?<small className="text-buttonColor" >Nama ayah harus diisi</small>:""}
                      </form>

                      <p className="text-lg font-bold my-2">Data Pengantin Wanita</p>
                      <form className="block" >
                        <input type="text" placeholder="Nama" className="my-2 border-solid border-2 rounded-sm w-full" onChange={e=>setNamaW(e.target.value)} />
                        {error?<small className="text-buttonColor" >Nama harus diisi</small>:""}
                        <input type="text" placeholder="Nama Panggilan" className="my-2 border-solid border-2 rounded-sm w-full" onChange={e=>setPanggilanW(e.target.value)} />
                        {error?<small className="text-buttonColor" >Kolom harus diisi</small>:""}
                        <input type="text" placeholder="Anak ke-" className="my-2 border-solid border-2 rounded-sm w-full" onChange={e=>setAnakW(e.target.value)} />
                        {error?<small className="text-buttonColor" >Kolom harus diisi</small>:""}
                        <input type="text" placeholder="Nama Ibu" className="my-2 border-solid border-2 rounded-sm w-full" onChange={e=>setIbuW(e.target.value)} />
                        {error?<small className="text-buttonColor" >Nama ibu harus diisi</small>:""}
                        <input type="text" placeholder="Nama Ayah" className="my-2 border-solid border-2 rounded-sm w-full" onChange={e=>setAyahW(e.target.value)} />
                        {error?<small className="text-buttonColor" >Nama ayah harus diisi</small>:""}
                      </form>

                      <p className="text-lg font-bold my-2">Data Acara 1</p>
                      <form className="block" >
                        <p>Nama Acara (Akad/Resepsi)</p>
                        <input type="text" className="my-2 border-solid border-2 rounded-sm w-full" onChange={e=>setAcara1(e.target.value)} />
                        {error?<small className="text-buttonColor" >Kolom harus diisi</small>:""}
                        <p>Tanggal Acara</p>
                        <input type="text" className="my-2 border-solid border-2 rounded-sm w-full" onChange={e=>setTanggal1(e.target.value)} />
                        {error?<small className="text-buttonColor" >Kolom harus diisi</small>:""}
                        <p>Waktu</p>
                        <input type="text" className="my-2 border-solid border-2 rounded-sm w-full" onChange={e=>setWaktu1(e.target.value)} />
                        {error?<small className="text-buttonColor" >Kolom harus diisi</small>:""}
                        <p>Alamat</p>
                        <input type="text" className="my-2 border-solid border-2 rounded-sm w-full" onChange={e=>setAlamat1(e.target.value)} />
                        {error?<small className="text-buttonColor" >Kolom harus diisi</small>:""}                        
                      </form>

                      <p className="text-lg font-bold my-2">Data Acara 2</p>
                      <form className="block" >
                        <p>Nama Acara (Akad/Resepsi)</p>
                        <input type="text" className="my-2 border-solid border-2 rounded-sm w-full" onChange={e=>setAcara2(e.target.value)} />
                        {error?<small className="text-buttonColor" >Kolom harus diisi</small>:""}
                        <p>Tanggal Acara</p>
                        <input type="text" className="my-2 border-solid border-2 rounded-sm w-full" onChange={e=>setTanggal2(e.target.value)} />
                        {error?<small className="text-buttonColor" >Kolom harus diisi</small>:""}
                        <p>Waktu</p>
                        <input type="text" className="my-2 border-solid border-2 rounded-sm w-full" onChange={e=>setWaktu2(e.target.value)} />
                        {error?<small className="text-buttonColor" >Kolom harus diisi</small>:""}
                        <p>Alamat</p>
                        <input type="text" className="my-2 border-solid border-2 rounded-sm w-full" onChange={e=>setAlamat2(e.target.value)} />
                        {error?<small className="text-buttonColor" >Kolom harus diisi</small>:""}                        
                      </form>
                      
                      <p className="text-lg font-bold my-2">Daftar Nama Turut Mengundang</p>
                      <textarea className="w-full border" rows="" cols=""></textarea>

                      <p className="text-lg font-bold my-2">Galeri Foto</p>
                      <div>
                        <p className="my-2">Foto 1</p>
                        <input type="file" name="" value=""/>
                        <p className="my-2">Foto 2</p>
                        <input type="file" name="" value=""/>
                        <p className="my-2">Foto 3</p>
                        <input type="file" name="" value=""/>
                        <p className="my-2">Foto 4</p>
                        <input type="file" name="" value=""/>
                        <p className="my-2">Foto 5</p>
                        <input type="file" name="" value=""/>
                      </div>

                      <button type="button" href="#" class="bg-buttonColor p-2 rounded-full w-full block self-center my-4 text-white text-center hover:scale-110 duration-200 shadow-lg" onClick={handleSubmit}>Kirim Data</button>
                    </div>  
                  </div>
                </div>
              </div>
            </div>
        </div>
    )
}

export default Dashboard;