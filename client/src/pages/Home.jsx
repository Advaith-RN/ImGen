import React, {useState, useEffect} from 'react'
import {Loader, Card, FormField} from '../components'

const Home = () => {

  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);

  const [searchText, setSearchText] = useState('');
  const [searchedResults, setSearchedResults] = useState(null);
  const [searchTimeout, setSearchTimeout] = useState(null);

  const RenderCards = ({data, title}) => {
    if(data?.length > 0) 
    {
      return data.map((post) => <Card key={post.id} {...post}/>)
    }else{
      return (
        <h2 className='mt-5 font-bold text-[#d41d6d] text-xl uppercase'>
          {title}
        </h2>
      )
    }
  }

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://dalle-rzb4.onrender.com/api/v1/post', {
          method: 'GET',
          headers: {
          "Content-Type": "application/json",
          },
        });
        if(response.ok){
          const result = await response.json();
          setAllPosts(result.data.reverse());
        }
      } catch (error) {
        alert(error);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  },[]);

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    setSearchTimeout(
      setTimeout(() => {
        const searchResults = allPosts.filter((item)=>item.name.toLowerCase().includes(searchText.toLowerCase()) || item.prompt.toLowerCase().includes(searchText.toLowerCase()));

        setSearchedResults(searchResults);
      },500)
    )  
  }

  return (
    <section className='max-w-7xl mx-auto'>
      <div className='bg-secondary rounded-lg p-10'>
        <h1 className='font-extrabold text-text text-8xl'>ImGen</h1>
        <p className='mt-2 text-lg text-text max-w-[1000px]'>Browse through a collection of images, or make your own!</p>
      </div>
      <div className='mt-16'>
        <FormField 
          label='Search Posts'
          type = "text"
          name="text"
          placeholder="Search Posts"
          value={searchText}
          handleChange={handleSearchChange}
        />
      </div>
      <div className='mt-10'>
        {
          loading ? (<div className='flex justify-center items-center'>
            <Loader />
          </div>) : (<>
            {searchText && (<h2 className='font-medium text-[#666e75] text-xl mb-3'>
              Search results for <span className='text-[#222328]'>{searchText}</span>
            </h2>)}
            <div className='grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3'>
              {searchText ? 
              (<RenderCards 
                data={searchedResults}
                title="No search results found"
               />):(<RenderCards
                  data={allPosts}
                  title="No posts found"
               />)}
            </div>
          </>)}
      </div>
    </section>
  )
}

export default Home