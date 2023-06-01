import React, { useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Home from '../../pages/Home/Home'
import Main from '../Main/Main'
import { Route, Routes, useLocation } from 'react-router'
import AboutUs from '../../pages/AboutUs/AboutUs'
import Contact from '../../pages/Contact/Contact'
import NotFound from '../../pages/NotFound/NotFound'
import Products from '../../pages/Products/Products'
import { useDispatch, useSelector } from 'react-redux'
import { showMenu } from '../../redux/slices/toggleMenuSlice'
import Product from '../../pages/Product/Product'
import ProductFeatures from '../ProductFeatures/ProductFeatures'
import Login from '../../pages/Login/Login'
import Register from '../../pages/Register/Register'
import { showCart } from '../../redux/slices/cartProductsSlice'

const Layout = () => {

  const { pathname } = useLocation()
  const navbarMenu = useSelector(state => state.toggleMenu.hidden)
  const cartMenu = useSelector(state => state.cart.cartHidden);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0,0);
    if(navbarMenu === false){
      dispatch(showMenu());
    }
    if(cartMenu === true){
      dispatch(showCart());
    }
  }, [pathname])


  return (
    <>
        <Navbar />
        <Main>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/juegos' element={<Products />}/>
            <Route path='/juego' element={<Product />}>
              <Route path=':nombre' element={<ProductFeatures />} />
            </Route>
            <Route path='/sobre-nosotros' element={<AboutUs />} />
            <Route path='/contacto' element={<Contact />} />
            <Route path='/iniciar-sesion' element={<Login />} />
            <Route path='/registro' element={<Register />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Main>
        <Footer />
    </>
  )
}

export default Layout