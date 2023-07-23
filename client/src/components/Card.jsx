import React from 'react';
import { download } from '../assets';
import { downloadImage } from '../utils';  

const Card = ({ _id, name, prompt, photoUrl}) => {
  const RandomColor = "#"+Math.floor(Math.random() * 16777215).toString(16);
  return (
    <div className='rounded-xl group relative shadow-card hover:shadow-cardhover hover:scale-[1.02] transition-all card'>
      <img className='w-full h-auto object-cover rounded-xl'
        src={photoUrl}
        alt={prompt}
      />
      <div className='flex flex-col max-h-[94.5%] absolute bottom-0 left-0 right-0 transition-opacity bg-secondary m-2 p-4 rounded-md opacity-0 group-hover:opacity-100'>
        <p className='text-text text-md overflow-y-auto prompt'>{prompt}</p>
        <div className='flex justify-between items-center gap-2 mt-4'>
          <div className='flex items-center gap-2'>
            <div className={`w-7 h-7 rounded-full object-cover bg-primary flex justify-center items-center text-text text-xs font-bold`}>
              {name[0]}
            </div>
            <p className='text-text font-bold text-sm'>{name}</p>
          </div>
          <button type='button' onClick={()=>{downloadImage(_id, photoUrl);
          alert(RandomColor);
          }} className='outline-none bg-transparent border-none'><img src={download} alt="download" className='w-6 h-6 object-contain invert hover:scale-[1.1]'/></button>
        </div>
      </div>
    </div>
  )
}

export default Card