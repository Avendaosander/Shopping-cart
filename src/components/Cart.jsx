import { useId, useState } from 'react'
import { BsCart3, BsCartX } from 'react-icons/bs'
import { useCart } from '../hooks/useCart'

function CartItem({ thumbnail, price, title, quantity, addToCart }){
   return (
      <li className='pb-4 border-b border-zinc-400'>
         <img src={thumbnail} alt={title} className='aspect-video w-full'/>
         <div>
            <strong>{title}</strong> - ${price}
         </div>
         <footer className='flex gap-2 justify-center items-center'>
            <small>Qty: {quantity}</small>
            <button className='px-2 py-1 bg-zinc-900 rounded' onClick={addToCart}>+</button>
         </footer>
      </li>
   )
}

function Cart() {
   const { cart, addToCart, clearCart } = useCart()
   const [isChecked, setIsChecked] = useState(false);
   const cartCheckboxId = useId()

   const handleCheckboxChange = (e) => {
      setIsChecked(e.target.checked);
   };

   return (
      <>
         <label
            className='items-center rounded-full cursor-pointer flex h-8 justify-center p-1 absolute right-2 top-2 w-8 z-10 bg-slate-500 hover:scale-110 text-zinc-200'
            htmlFor={cartCheckboxId}
         >
            <BsCart3 />
         </label>
         <input
            id={cartCheckboxId}
            type='checkbox'
            checked={isChecked}
            onChange={handleCheckboxChange}
            hidden
         />

         <aside className={`bg-zinc-950 ${isChecked ? 'block' : 'hidden'} p-8 fixed right-0 top-0 bottom-0 w-52 text-zinc-200 text-center`}>
            <ul>
               {cart.map(product => (
                  <CartItem
                     key={product.id}
                     addToCart={() => addToCart(product)}
                     {...product}
                  />
               ))}
            </ul>

            <button onClick={clearCart} className='mt-3 p-3 bg-zinc-900 rounded'>
               <BsCartX />
            </button>
         </aside>
      </>
   )
}

export default Cart
