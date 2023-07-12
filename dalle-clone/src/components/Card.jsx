import React from 'react';
import { download } from '../assets';
import { downloadImage } from '../utils';  

const Card = ({ _id, name, prompt, photoUrl}) => {
  const RandomColor = Math.floor(Math.random() * 16777215).toString(16);
  return (
    <div className='rounded-xl group relative shadow-card hover:shadow-cardhover transition-all card'>
      <img className='w-full h-auto object-cover rounded-xl'
        src={photoUrl}
        alt={prompt}
      />
      <div className='group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 transition-all bg-[#10131f] m-2 p-4 rounded-md'>
        <p className='text-white text-md overflow-y-auto prompt'>{prompt}</p>
        <div className='flex justify-between items-center gap-2 mt-4'>
          <div className='flex items-center gap-2'>
            <div className='w-7 h-7 rounded-full object-cover bg-green-700 flex justify-center items-center text-white text-xs font-bold'>
              {name[0]}
            </div>
            <p className='text-white text-sm'>{name}</p>
          </div>
          <button type='button' onClick={()=>downloadImage(_id, photoUrl)} className='outline-none bg-transparent border-none'><img src={download} alt="download" className='w-6 h-6 object-contain invert hover:scale-[1.1]'/></button>
        </div>
      </div>
    </div>
  )
}

export default Card