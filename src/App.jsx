import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import All_Products from './components/All_Products'
import Cart from './pages/Cart'
import Product_Detail from './pages/Product_Detail'
import ProductByCategory from './pages/ProductByCategory'
import SearchProduct from './pages/SearchProduct'
import TrendingSlider from './components/TrendingSlider'


const App = () => {
  return (
    <Router>
      <Navbar/>

      <Routes>        
        <Route path='/' element={<All_Products/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/product/:id' element={<Product_Detail/>}/>
        <Route path='/product/category/:cat' element={<ProductByCategory/>}/>
        <Route path='/products/search/:term' element={<SearchProduct/>}/>
      </Routes>

      <TrendingSlider/>

    </Router>
  )
}

export default App
