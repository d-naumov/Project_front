import logo from "./logo.svg"
import "./App.css"
import { Route, Routes } from "react-router-dom"
import Layout from "./layouts/Layouts"
import YoutubeExample from "./components/youtubeExample/YoutubeExample"
import Characters from "./features/characters/Characters"
import CharacterInfo from "./characterInfo/CharacterInfo"
import Home from "./features/home/Home"
import Users from "./features/users/Users"
import Login from "./features/authorization/Login"
import ProductItem from "./components/productItem/ProductItem"
import Products from "./features/products/Products"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="users" element={<Users />} />
          <Route path="youtube" element={<YoutubeExample />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<ProductItem />} />
          <Route path="characters" element={<Characters />} />
          <Route path="characters/:id" element={<CharacterInfo />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<p>Error</p>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
