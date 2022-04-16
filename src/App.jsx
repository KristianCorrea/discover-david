import "./app.scss"
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';

import Intro from "./components/intro/Intro"
import Legacies from "./components/legacies/Legacies"
import ExploreLegacy from "./components/explorelegacy/ExploreLegacy"
import CreateLegacy from "./components/createlegacy/CreateLegacy"
import Leaderboard from "./components/leaderboard/Leaderboard"
import { useRef } from "react";

function App() {
  const scrollToDiv = (ref) => {
    ref.current.scrollToView()
  };
  const legacies = useRef();
  const explore = useRef();
  const create = useRef();
  return (
    <Router>
      <div className="app">
        <div className="sections">
          <Intro/>
          <Legacies reference={legacies} clickExplore={()=> scrollToDiv(explore)} clickCreate={()=> scrollToDiv(explore)}/>
          <Routes>
            <Route path="/explore" element={<ExploreLegacy reference={explore}/>} />
            <Route path="/create" element={<CreateLegacy reference={create}/>} />
          </Routes>
          
          <Leaderboard/>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
