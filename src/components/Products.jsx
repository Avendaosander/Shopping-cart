import { BsCartPlus } from 'react-icons/bs'

function Products({ products }) {
   return (
      <main className='w-full flex justify-center items-center'>
         <ul className='grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-3'>
            {products.map(product => (
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
                     <span className='text-sm opacity-90'> ${product.price}</span>
                  </div>
                  <button className='bg-zinc-900 py-2 px-3 rounded'>
                     <BsCartPlus />
                  </button>
               </li>
            ))}
         </ul>
      </main>
   )
}

export default Products
