import { BsCartPlus, BsCartX } from 'react-icons/bs'
import { useCart } from '../hooks/useCart'

function Products({ products }) {
   const { cart, addToCart, removeFromCart } = useCart()

   const checkedProductInCart = product => {
      return cart.some(item => item.id === product.id)
   }

   return (
      <main className='w-full flex justify-center items-center'>
         <ul className='grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-3'>
            {products.map(product => {
               const isProductInCart = checkedProductInCart(product)

               return (
                  <li
                     key={product.id}
                     className='flex flex-col gap-1 rounded text-white p-2 items-center shadow-white/10 shadow-2xl bg-zinc-950'
                  >
                     <img
                        className='rounded w-full object-cover aspect-video'
                        src={product.thumbnail}
                        alt={product.title}
                     />
                     <div>
                        <strong className='text-sm'>{product.title}</strong> -
                        <span className='text-sm opacity-90'>
                           {' '}
                           ${product.price}
                        </span>
                     </div>
                     <button
                        className='bg-zinc-900 py-2 px-3 rounded'
                        onClick={() =>
                           isProductInCart
                              ? removeFromCart(product)
                              : addToCart(product)
                        }
                     >
                        {
                           isProductInCart ? (
                              <BsCartX className='text-red-600' />
                           ) : (
                              <BsCartPlus className='text-blue-600' />
                           )
                        }
                     </button>
                  </li>
               )
            })}
         </ul>
      </main>
   )
}

export default Products
