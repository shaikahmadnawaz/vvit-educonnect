
import { Login } from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        {/* Student Routes */}
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        {/* Admin Routes */}
        <Route></Route>
      </Routes>
    </Router>
    
  );
}

export default App;
