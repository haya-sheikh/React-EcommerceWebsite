import React, { useState } from 'react'
import { Route , Routes , Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import Page404 from './pages/Page404'
import NavigationBar from './Components/NavigationBar'
import FooterSection from './Components/FooterSection'
import CategoriesPage from './pages/CategoriesPage'
import ProductPage from './pages/ProductPages'
import ImageSection from './Components/ImageSection'

function App() {
const [user , setUser] = useState(true)

  return (
    <>
  <NavigationBar />

  {
     user

     ?
     ( 
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Products" element={<Products/>} />
      <Route path="/Products/:productID" element={<ProductPage />} />
      <Route path="/AboutUs" element={<AboutUs/>} />
      <Route path="/Products/category/:categoryName" element={<CategoriesPage/>} />     
      <Route path="*" element={<Page404 />} />
    </Routes>
    )
     :
     ( 
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="*" element={<Navigate to="/login" replace={true} />} />
    </Routes>
    )

  }

   <FooterSection />

    </>
  )
}

export default App