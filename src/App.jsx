import { useState } from 'react'
import { useFilters } from './hooks/useFilters'
import { products as initialProducts } from './mocks/products.json'
import Header from './components/Header'
import Products from './components/Products'

function App() {
   const [products] = useState(initialProducts)
   const { filterProducts } = useFilters()
   const filteredProducts = filterProducts(products)

   return (
      <>
         <Header/>
         <Products products={filteredProducts}/>
      </>
   )
}

export default App