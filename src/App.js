import './App.css';
import Fooder from './Components/Fooder/Fooder';
import Header from './Components/Header/Header';
import Home from './Page/Home/Home';
import About from './Page/Abouts/About/About'
import { Route, Routes } from 'react-router-dom';
import Blog from './Page/Blogs/Blog/Blog';
import SingUp from './Page/SingUp/SingUp';
import LongIn from './Page/LongIn/LongIn';
import RequireAuth from '../../bkash/src/Page/RequireAuth/RequireAuth';



function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<RequireAuth ><Blog /></RequireAuth>} />
        <Route path='/singup' element={<SingUp />} />
        <Route path='/longin' element={<LongIn />} />
      </Routes>
      <Fooder />
    </div>
  );
}

export default App;
