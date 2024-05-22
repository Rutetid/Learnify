import LandingPage from "./Components/Landing Page/LandingPage"
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Dashboard";

import {
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Sidebar />} />
      </Routes>
    </>
  )
}

export default App