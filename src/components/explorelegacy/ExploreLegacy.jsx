import "./explorelegacy.scss"
import {useRef, useState, useEffect} from 'react'
import images from './test.json'
import { getImages } from "../../api";

export default function ExploreLegacy({reference}) {
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      const responseJson = await getImages();
      console.log(responseJson)
      setImageList(responseJson.resources)
    }

    fetchData();
  }, [])
  
  return (
    <div ref={reference} className="exploreLegacy">
      <div className="image-grid">
      {
        imageList.map((image)=><img src={image.url} alt={image.public_id}></img>)
      }
      </div>
    </div>
  )
}
