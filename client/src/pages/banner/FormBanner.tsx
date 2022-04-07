import React, {useState, useEffect} from 'react'
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import InputLong from '../../components/Inputs/InputLong';
import InputP from '../../components/Inputs/InputP';
import UploadDocument from '../../components/Inputs/UploadDocument';
import Title from '../../components/Title/Title';

const FormBanner = () => {
    const [getTitleB, setTitleB] = useState<any>();
    const [selectedFileB, setSelectedFileB] = useState<any>();
    const [previewB, setPreviewB] = useState<any>();
  
    useEffect(() => {
        if(!selectedFileB){
            setPreviewB(undefined)
            return
        }
        const objectUrl = URL.createObjectURL(selectedFileB);
        setPreviewB(objectUrl)
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFileB])
    const onSelectFile = (e : any) => {
      if (!e.target.files || e.target.files.length === 0) {
          setSelectedFileB(undefined)
          return
      }
      setSelectedFileB(e.target.files[0])
    }   
    return (
      <>
          
          <div className= "grid md:grid-cols-2  sm:grid-cols-1 gap-20">
              <InputLong label="Título" placeholder="Título" getVal = {getTitleB} setVal = {setTitleB}/>
              <UploadDocument label = "Cargar Anuncio" onchange = {onSelectFile}/>
          </div>
          <div className='grid justify-center font-bold mt-10'>
              <Title title={getTitleB}/>
              <img src={previewB} className = "mt-10  md:h-[500px] md:w-[500px]  sm:h-[250px] sm:w-[250px] rounded-md object-cover"/>
          </div>
          <div className = "grid justify-center">
                <button className = "mt-4  primary-button-blue">Subir</button>
            </div>
         
          
        
         
         
         
              
        
      
      </>
    )
  }
  
  export default FormBanner