import Nav from "./Components/Nav";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Main from "./Components/Main";
import Buy from "./pages/Buy";
import Error from "./pages/Error";
import { BrowserRouter,Route,Routes } from "react-router-dom";
function App() {
  return (
  <>
        <BrowserRouter>
                <Routes>
                      <Route path="/login" element={<Login/>}></Route>
                      <Route path="/register" element={<Register/>}></Route>
                      <Route path="/" element={<Main/>}></Route>
                      <Route path="/buy" element={<Buy/>}></Route>
                      <Route path="*" element={<Error/>}></Route>
                      <Route path="/nav" element={<Nav/>}/>
                      <Route path="/footer" element={<Footer/>}/>
                      <Route path="/cards" element={<Cards/>}/>
                </Routes>
        </BrowserRouter>
  </>
  )
}

export default App;
