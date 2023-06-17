import { useId } from 'react'
import { useFilters } from '../hooks/useFilters'

function Filters() {
   const { filters, setFilters } = useFilters()
   const minPriceFilterID = useId()
   const categoryFilterID = useId()

   const handleChangeMinPrice = e => {
      setFilters(prevState => ({
         ...prevState,
         minPrice: e.target.value
      }))
   }

   const handleChangeCategory = e => {
      setFilters(prevState => ({
         ...prevState,
         category: e.target.value
      }))
   }
   return (
      <section className='flex items-center justify-between text-sm font-semibold text-center w-full'>
         <div className='flex gap-1 text-zinc-200'>
            <label htmlFor={minPriceFilterID}>Precio a partir de:</label>
            <input
               type='range'
               name='price'
               id={minPriceFilterID}
               min={0}
               max={1000}
               onChange={handleChangeMinPrice}
               value={filters.minPrice}
            />
            <span>${filters.minPrice}</span>
         </div>
         <div className='flex gap-3 text-zinc-200'>
            <label htmlFor={categoryFilterID}>Categoria</label>
            <select
               name='category'
               id={categoryFilterID}
               className='bg-zinc-900 ring-1 ring-zinc-200/70 rounded-sm'
               onChange={handleChangeCategory}
            >
               <option value='all'>Todas</option>
               <option value='smartphones'>Smartphones</option>
               <option value='laptops'>Laptops</option>
               <option value='home-decoration'>Home-decoration</option>
            </select>
         </div>
      </section>
   )
}

export default Filters
