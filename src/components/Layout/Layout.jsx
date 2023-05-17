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

const Layout = () => {

  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0,0);
  }, [pathname])

  return (
    <>
        <Navbar />
        <Main>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/licores' element={<Products />} />
            <Route path='/sobre-nosotros' element={<AboutUs />} />
            <Route path='/contacto' element={<Contact />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Main>
        <Footer />
    </>
  )
}

export default Layout