import React from 'react'
import BlogCard from '../../components/Cards/BlogCard'
import Title from '../../components/Title/Title'
import { FaPlusCircle } from 'react-icons/fa'
const Blog = () => {
  return (
      <>
        <Title title="Natgas Blog"/>
        <div className = "grid w-full justify-items-center pt-4 mb-8">
            <button className = " text-natgas-azul font-bold rounded-full w-[260px] h-[50px] border-natgas-azul-claro border-[5px]">
                <div className='inline-flex'>
                    <p className = "mt-0.5">Agregar Natgas Blog</p>
                    <FaPlusCircle className='text-3xl ml-4 text-natgas-verde' /> 
                </div>
            </button>
        </div>
        
        <div className='grid  gap-5 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'>
            <BlogCard image = "https://scontent.fqro1-1.fna.fbcdn.net/v/t1.6435-9/162478430_1838218953002496_26093472607830674_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=730e14&_nc_ohc=LcoISjRUJZMAX_gckq4&_nc_ht=scontent.fqro1-1.fna&oh=00_AT907TprSGR80RM9wqfGDKjqkhWHOGBrBJX2jA1sdO2XBQ&oe=62707A69"/>
            <BlogCard image = "https://scontent.fqro1-1.fna.fbcdn.net/v/t1.6435-9/162478430_1838218953002496_26093472607830674_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=730e14&_nc_ohc=LcoISjRUJZMAX_gckq4&_nc_ht=scontent.fqro1-1.fna&oh=00_AT907TprSGR80RM9wqfGDKjqkhWHOGBrBJX2jA1sdO2XBQ&oe=62707A69"/>
            <BlogCard image = "https://scontent.fqro1-1.fna.fbcdn.net/v/t1.6435-9/162478430_1838218953002496_26093472607830674_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=730e14&_nc_ohc=LcoISjRUJZMAX_gckq4&_nc_ht=scontent.fqro1-1.fna&oh=00_AT907TprSGR80RM9wqfGDKjqkhWHOGBrBJX2jA1sdO2XBQ&oe=62707A69"/>
            <BlogCard image = "https://scontent.fqro1-1.fna.fbcdn.net/v/t1.6435-9/162478430_1838218953002496_26093472607830674_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=730e14&_nc_ohc=LcoISjRUJZMAX_gckq4&_nc_ht=scontent.fqro1-1.fna&oh=00_AT907TprSGR80RM9wqfGDKjqkhWHOGBrBJX2jA1sdO2XBQ&oe=62707A69"/>
            <BlogCard image = "https://scontent.fqro1-1.fna.fbcdn.net/v/t1.6435-9/162478430_1838218953002496_26093472607830674_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=730e14&_nc_ohc=LcoISjRUJZMAX_gckq4&_nc_ht=scontent.fqro1-1.fna&oh=00_AT907TprSGR80RM9wqfGDKjqkhWHOGBrBJX2jA1sdO2XBQ&oe=62707A69"/>
            <BlogCard image = "https://scontent.fqro1-1.fna.fbcdn.net/v/t1.6435-9/162478430_1838218953002496_26093472607830674_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=730e14&_nc_ohc=LcoISjRUJZMAX_gckq4&_nc_ht=scontent.fqro1-1.fna&oh=00_AT907TprSGR80RM9wqfGDKjqkhWHOGBrBJX2jA1sdO2XBQ&oe=62707A69"/>

        </div>

        
        
      
      
      </>

    
  )
}

export default Blog