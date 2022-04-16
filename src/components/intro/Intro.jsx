import "./intro.scss"
import {Titles} from "./davidNames.js"
import { init } from "ityped"
import { useEffect, useRef } from "react"

export default function Intro() {
  const textRef = useRef();

  const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
      return array.reverse();
    }
  }

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      cursorChar: "_",
      strings: shuffleArray(Titles),
    });
  }, []);

  return (
    <div className="intro">
        <div className="content">
          <div className="introCard">
            <div className="imageContainer">
              <img src={require("./profile.jpg")} loading="lazy" width="319" alt="" class="image"></img>
            </div>
            <div className="detailsContainer">
              <div className="details">
                <div className="discover">DISCOVER</div>
                <div className="name">David Colina</div>
                <div className="titlesContainer">
                  <div className="titles">
                    <h4>
                      <span className="title" ref={textRef}></span>
                    </h4>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
          <div className="div-block-11"><img src={require("./arrow.png")} loading="lazy" sizes="(max-width: 479px) 99vw, (max-width: 767px) 50vw, (max-width: 991px) 31vw, (max-width: 1919px) 24vw, 12vw" srcset="images/kindpng_2104584.png 500w, images/kindpng_2104584.png 1002w" alt="" class="image-3"></img></div>
        </div>
    </div>
  )
}
