import "./createlegacy.scss"
import georgeSmile from './smile.jpg'
import george from './george.jpg'
import Axios from 'axios'
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateLegacy() {

  const [smile, setSmile] = useState(false)
  const [imageSelected, setImageSelected] = useState("");
    const navigate = useNavigate();
  const uploadImage = () => {
    const formData = new FormData()
    formData.append("file", imageSelected)
    formData.append("upload_preset", "xfuefhcg")

    Axios.post("https://api.cloudinary.com/v1_1/savagejack/image/upload", formData)
      .then((response)=>{
        console.log(response);
        // navigate('/')
        setSmile(true)
        console.log("George happy")
        
        console.log("George forgor")
      });
  };

  useEffect(()=>{
    setTimeout(()=>{setSmile(false)}, 10000)
    console.log("SMILE RESET")
  },[smile])

  return (
    <div id="TEST" className="createLegacy" style={{backgroundImage: smile ? `url(${georgeSmile})` : `url(${george})`}}>
        <h1>{smile ? 'Nice' : 'Go'} Upload Bro</h1>
        <div className="upload">
          <input 
            type="file" 
            onChange={(event)=>{
              setImageSelected(event.target.files[0]);
            }}
          />
          <button onClick={uploadImage}>Upload Memory</button>
        </div>
        
    </div>
  )
}
