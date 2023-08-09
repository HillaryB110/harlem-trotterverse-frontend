import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/NavBar/Navbar";
import HomePage from "./components/HomePage/HomePage";
import ActivePlayers from "./components/ActivePlayers/ActivePlayers";
import EditTrotter from "./components/EditTrotter/EditTrotter";
import CreateTrotter from "./components/CreateTrotter/CreateTrotter";
import AllUserTrotters from "./components/AllUserTrotters/AllUserTrotters";
import SingleUserTrotter from "./components/SingleUserTrotter/SingleUSerTrotter";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/trotters" element={<ActivePlayers />}></Route>
          <Route path="/trotters/:id" element={""}></Route>

          <Route path="/user-trotter" element={<AllUserTrotters />}></Route>
          <Route path="/user-trotter/new" element={<CreateTrotter />} />
          <Route path="/user-trotter/:id" element={<SingleUserTrotter />} />
          <Route path="/user-trotter/:id/edit" element={<EditTrotter />} />
          <Route path="*" element={""} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
