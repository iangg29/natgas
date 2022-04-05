import React from 'react'

type Props = {
    image : any;
    title : string;
    date : any;
    content  : string;

}
const BlogCard = ({image, title, date, content} : Props): JSX.Element => {
  return (
    <div className = "w-[400px] h-[511px]  shadow-md box-border border-2 rounded-md">
        <img className = "inset-0 h-[236px] w-[400px] rounded-md object-cover" src = {image} alt =  {"Imagen " + title}/>
        <div className = "text-black border-b-2 border-natgas-gris-cool text-center font-bold h-{45px} text-2xl left-{32px} top-{247px}  ">{title}</div>
        <div className=' pt-4 pl-4 pr-4 h-[131px] line-clamp-5 text-natgas-azul '>
           {content}
        </div>
        <div className='grid grid-cols-2 pt-12 pl-4'>
            <div className = ' text-sm mt-2 text-natgas-gris-cool font-bold  '>{date}</div>
            <button  className = ' text-sm ml-16 w-28  rounded-md bg-gradient-to-r h-10 bg-natgas-sec-one text-white'>Leer</button>
        </div>
       
    </div>
  )
}

export default BlogCard