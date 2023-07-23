import React from 'react'

const FormField = ({ label, type, name, placeholder, value, handleChange, isSurpriseMe, handleSurpriseMe}) => {
  return (
    <div>
      <div className='flex items-center gap-2 mb-2'>
        <label className='block text-sm font-medium text-text'>
          {label}
        </label>
       {isSurpriseMe && <button type='button' onClick={handleSurpriseMe} className='font-semibold text-xs bg-accent py-1 px-2 rounded-[5px] transition-transform text-background hover:scale-[1.1]'>Surprise Me</button>}
      </div>
      <input 
      type={type}
      id={name}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      required
      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary outline-none block w-full p-3'
      />
    </div>
  )
}

export default FormField