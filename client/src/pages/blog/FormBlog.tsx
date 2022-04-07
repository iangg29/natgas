import React, {useState, useEffect} from 'react'
import InputLong from '../../components/Inputs/InputLong';
import InputP from '../../components/Inputs/InputP';
import UploadDocument from '../../components/Inputs/UploadDocument';
import Title from '../../components/Title/Title';
import axios from 'axios';

const FormBlog = () => {
  const [getTitle, setTitle] = useState<any>();
  const [getText, setText] = useState<any>();
  const [selectedFile, setSelectedFile] = useState<any>();
  const [preview, setPreview] = useState<any>();
 
  const upload = async (e:any) => {
      try{
          e.preventDefault();
          const form = new FormData();
          form.append("title", getTitle);
          form.append("date", new Date().toLocaleDateString());
          form.append("content", getText);
          form.append("blog_photo", selectedFile);
          console.log(selectedFile[0])

          const res = await axios({
              method: 'POST',
              url: '/blog',
              data: form,
          });

      }catch (error : any) { 
          alert(error.response.message);
          console.log(error.response);
      }
  }

  useEffect(() => {
      if(!selectedFile){
          setPreview(undefined)
          return
      }
      const objectUrl = URL.createObjectURL(selectedFile);
      setPreview(objectUrl)
      return () => URL.revokeObjectURL(objectUrl)
  }, [selectedFile])
  const onSelectFile = (e : any) => {
    if (!e.target.files || e.target.files.length === 0) {

        setSelectedFile(undefined)
        return
    }
    setSelectedFile(e.target.files[0])
    console.log(e.target.files[0])
  }   
  return (
    <>
        
        <div className= "grid md:grid-cols-2  sm:grid-cols-1 gap-20">
            <InputLong label="Título" placeholder="Título" getVal = {getTitle} setVal = {setTitle}/>
            <UploadDocument label = "Elegir archivo" onchange = {onSelectFile}/>
        </div>
        <div className='grid justify-center font-bold mt-10'>
            <Title title={getTitle}/>
            <img src={preview} className = "mt-10  md:h-[500px] md:w-[500px]  sm:h-[250px] sm:w-[250px] rounded-md object-cover"/>
        </div>
        <div>
            <InputP label = "Contenido" placeholder="Escribir aquí..." getVal = {getText} setVal = {setText} />
            <div className = "grid justify-center">
                <button onClick = {upload} className = "mt-4  primary-button-blue">Subir</button>
            </div>
            
        </div> 
    
    
    </>
  )
}

export default FormBlog
