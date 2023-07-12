import React, { useState } from 'react';
import { Form, useNavigate } from 'react-router-dom';

import { preview } from '../assets';
import { getRandomPrompt } from '../utils';
import { FormField,Loader } from '../components';

const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo:"",
  });
  const [generatingImg,setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(form.prompt && form.photo){
      setLoading(true);
      
      try {
        const response = await fetch('http://localhost:3000/api/v1/post',{
          method: 'POST',
          headers: {
            "Content-Type": "application/json", 
          },
          body: JSON.stringify(form),
        }) 
        
        await response.json();
        navigate("/");
      } catch (error) {
        alert(error);}finally{
        setLoading(false);
      }
    }else{
      alert("Please enter a prompt and generate an image");
    }
  }

  const generateImg = async () => {
    if(form.prompt){
      try {
        setGeneratingImg(true);
        const response = await fetch('http://localhost:3000/api/v1/dalle',{
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body : JSON.stringify({prompt: form.prompt}),
        });

        const data = await response.json();
        setForm({...form, photo: `data:image/jpeg;base64,${data.photo}`});
      } catch (error) {
        console.log(error);
        alert(error);
      }
      setGeneratingImg(false);
    }else{
      alert("Please enter a prompt");
    }
  }


  return (
    <section className='max-w-7xl mx-auto'>
      <div>
        <h1 className='font-extrabold text-[#222328] text-[32px]'>Create</h1>
        <p className='mt-2 text-[#666e75] text-[16px] max-w-[1000px]'>Create imaginative and visually stunning images using DALL E's robust engine</p>
      </div>
      <form className='mt-16 max-w-3xl' onSubmit={()=>{

      }}>
      <div className='flex flex-col gap-5'>
        <FormField 
          label="Your Name"
          type="text"
          name="name"
          placeholder="John Doe"
          value={form.name}
          handleChange={handleChange}
        />
        <FormField 
          label="Prompt"
          type="text"
          name="prompt"
          placeholder="A cat sitting on a couch"
          value={form.prompt}
          handleChange={handleChange}
          isSurpriseMe
          handleSurpriseMe={()=>{   
            const randomPrompt = getRandomPrompt(form.prompt);
            setForm({...form, prompt: randomPrompt})
          }}
        />
        <div className='relative bg-gray-50 border border-gray-300 text-gray-900 rounded-lg text-sm focus:ring-blue-500 focus:border-blue-500 w-64 p-3 h-64 flex justify-center items-center'>
          {form.photo ? (<img 
            src={form.photo}
            alt={form.prompt}
            className='w-full h-full object-contain'
          />) : (<img 
            src={preview}
            alt="preview"
            className='w-full h-full object-contain opacity-40'
          />)}

          {generatingImg && (<div className='absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)]'><Loader/></div>)}
        </div>
      </div>
      <div className='mt-5 flex gap-5'>
        <button type="button" onClick={generateImg} className='text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center hover:bg-green-600'>
          {generatingImg ? "Generating..." : "Generate Image"}
        </button>
      </div>
      <div className='mt-10'>
        <p className='mt-2 text-[#66e75] text-[14px]'>Once you have created the image you want, share it with others in the community!</p>
        <button
          type="submit"
          className='mt-3 text-white bg-[#6469ff] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center'
          onClick={handleSubmit}
        >
          {loading ? "Posting..." : "Share it with the world!"}
        </button>
      </div>
      </form>
    </section>
  )
}

export default CreatePost