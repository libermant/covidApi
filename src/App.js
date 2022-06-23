import './App.css';
import { BrowserRouter , Route , Routes } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar"
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Country from './pages/Country/Country';




function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/country/:country' element={<Country/>}/>

      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
