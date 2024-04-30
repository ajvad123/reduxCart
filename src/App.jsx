import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import './bootstrap.min.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Details from './pages/Details';
import Wishlist from './pages/Wishlist';
import Header from './assets/components/Header';
import Footer from './assets/components/Footer';




function App() {
  

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/details/:id' element={<Details/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/wish' element={<Wishlist/>}/>
        <Route path='/*' element={<Home/>}/>
        
      </Routes>
      <Footer/>
    </>
  )
}
 export default App
