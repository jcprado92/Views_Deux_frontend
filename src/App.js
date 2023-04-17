import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from './providers/UserProvider'
import LoggedIn from "./components/login/LoggedIn";
import NavBar from "./components/navBar/NavBar";
import Home from "./pages/home/Home";
import Index from "./pages/index/Index";
import Show from "./pages/show/Show";
import New from "./pages/new/New";
import Edit from "./pages/edit/Edit";
import FourOFour from "./pages/fourOFour/FourOFour";

import Footer from "./components/footer/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/loggedInPage" element={<LoggedIn />} />
            <Route path="/views" element={<Index />} />
            <Route path="/views/:id" element={<Show />} />
            <Route path="/views/new" element={<New />} />
            <Route path="/views/:id/edit" element={<Edit />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
          <Footer />
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
