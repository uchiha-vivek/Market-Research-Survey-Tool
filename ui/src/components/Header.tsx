import React from 'react'
import {Link} from 'react-router-dom'
import {BrainCircuit} from 'lucide-react'

const Header:React.FC = () => {
    return (
        <>
        <header className='px-4 lg:px-16 h-10 flex items-center ' >
           <Link to='/' className='flex items-center justify-center'>
           <BrainCircuit className='h-6 w-6 mr-2'/>
           <span className='font-bold'> AskAway </span>
           </Link>
           <nav className='ml-auto flex gap-4 sm:gap-6'>
                 <Link to='/' className='text-sm font-medium hover:underline underline-offset-4'>Feature</Link>
                 <Link to='/' className='text-sm font-medium hover:underline underline-offset-4'>Pricing</Link>
                 <Link to='/' className='text-sm font-medium hover:underline underline-offset-4'>About</Link>
                 <Link to='/' className='text-sm font-medium hover:underline underline-offset-4'>Contact</Link>

           </nav>
        </header>
        </>
    )
}
export default Header