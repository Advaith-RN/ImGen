import { useState } from 'react';
import { BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import { logo } from './assets';
import { Home, CreatePost } from './pages';

function App() {

  return (
    <BrowserRouter>
      <header className='w-full flex justify-between items-center bg-background sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]'>
        <Link to="/">
          <img src={logo} alt="logo" className='w-16 transition-transform hover:scale-[1.1] object-contain' />
        </Link>

        <Link to="/create-post" className='font-inter font-medium bg-primary px-4 py-2 rounded-md transition-transform hover:scale-[1.1]'>Create</Link>
      </header>

      <main className='sm:p-8 px-4 py-8 w-full bg-background min-h-[calc(100vh-73px)]'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
      </main>
    </BrowserRouter>
    
  )
}

export default App
