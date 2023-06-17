import { useState } from 'react'
import { useFilters } from './hooks/useFilters'
import { CartProvider } from './context/cart'
import { products as initialProducts } from './mocks/products.json'
import Header from './components/Header'
import Cart from './components/Cart'
import Products from './components/Products'
import Footer from './components/Footer'

function App() {
   const [products] = useState(initialProducts)
   const { filterProducts } = useFilters()
   const filteredProducts = filterProducts(products)

   return (
      <CartProvider>
         <Header/>
         <Cart/>
         <Products products={filteredProducts}/>
         <Footer/>
      </CartProvider>
   )
}

export default App