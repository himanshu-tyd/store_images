import React, { useState } from "react";
import { imageUpload } from "./imageUpload";

const App = () => {

  const [loader,setLoader]=useState(false)
  const [url,setUrl]=useState('')

  const handleUpload=async(e)=>{
    const file=e.target.files[0]
   
  const data=await imageUpload(file ,setLoader)
    
  setUrl(data.url)

  }

  return (
    <div className="flex items-center justify-center h-screen flex-col gap-5 ">
      <div className="avatar">
        <div className="w-24 rounded-full">
          <img src={url ||  "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"} />
        </div>
      </div>

      <input type="file" className="file-input file-input-bordered file-input-error w-full max-w-xs" onChange={handleUpload} />

      <h3>{loader ? 'uploading ...' : `file path : ${url}` } </h3>

    </div>
  );
};

export default App;


//himanshutyd
//upload