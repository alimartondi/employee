import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import UserLists from "./pages/UserLists";
import UserDetail from "./pages/UserDetail";
import Notfound from "./components/NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/users" exact element={<UserLists />} />
          <Route path="/users/:id" exact element={<UserDetail />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
