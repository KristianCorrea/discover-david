import "./legacies.scss"
// import { Link } from 'react-router-dom'
import { Link } from 'react-scroll'
import CreateLegacy from "../createlegacy/CreateLegacy"

export default function Legacies({reference, clickExplore, clickCreate}) {
  return (
    <div className="legacies">
      <h1>Experience David</h1>
      <div className="containerCenter">
        <div className="legacySelectContainer">
          
          <div className="discoverHistory">
            <Link to="/explore" style={{ textDecoration: 'none'}} >
            <h3 className="heading">Explore History</h3>
            <div className="discover"></div>
            <h3 className="discoverCaption">Discover his Legacies</h3>
            </Link>
          </div>
          
          <div className="createHistory">
            <Link to="TEST" smooth={true} style={{ textDecoration: 'none'}}>
            <h3 className="heading">Create History</h3>
            <div className="create"></div>
            <h3 className="createCaption">Create new Legacies</h3>
            </Link>
          </div>
          
        </div>
      </div>
    </div>
  )
}
