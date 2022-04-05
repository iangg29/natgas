import React, {useState, useRef, useEffect} from 'react'
import axios from 'axios'
import BlogCard from '../../components/Cards/BlogCard'
import Title from '../../components/Title/Title'
import { FaPlusCircle } from 'react-icons/fa'
import Pagination from '../../components/Inputs/Pagination'
const Blog = () : JSX.Element => {

  const [getBlogs, setBlogs] = useState<any[]>([]);
  const [getPage, setPage] = useState<any>(1);
  const limit = 15;
  const topRef = useRef<any>(null);

 useEffect(() => {
    (async () => {
        try{
            const [blogs] = await Promise.all([axios.get(`/blog?sort=idBlogPost&limit=${limit}&page=${getPage}`)]);
            setBlogs(blogs.data.data.documents);

        }catch (error: any) {
            alert(error.message);
        }
    })();
  }, [getPage]);
  return (
      <>
        <Title title="Natgas Blog"/>
        <div className = "grid w-full justify-items-center pt-4 mb-8" ref={topRef}>
            <button className = " text-natgas-azul font-bold rounded-full w-[260px] h-[50px] border-natgas-azul-claro border-[5px]">
                <div className='inline-flex'>
                    <p className = "mt-0.5">Agregar Natgas Blog</p>
                    <FaPlusCircle className='text-3xl ml-4 text-natgas-verde' /> 
                </div>
            </button>
        </div>
        
        <div className='grid  gap-5 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'>
            {getBlogs.length > 0 ? (
                getBlogs.map((blog) => (
                <BlogCard
                    image = {blog.image}
                    title={blog.title}
                    content = {blog.content}
                    date={new Date(blog.date).toLocaleDateString()}
                />
                ))
            ) : (
                <p>No existen blogs</p>
            )}

        </div>
        <Pagination
            length={getBlogs.length}
            getPage={getPage}
            setPage={setPage}
            reference={topRef}
            limit = {limit}
        />
  

        
        
      
      
      </>

    
  )
}

export default Blog