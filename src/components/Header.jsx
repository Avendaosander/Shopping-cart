import Filters from './Filters'

function Header() {
   return (
      <header className='text-center py-5 max-w-2xl m-auto'>
         <h1 className='text-zinc-200 text-2xl font-bold py-3'>React Shop 🛒</h1>
         <Filters/>
      </header>
   )
}

export default Header