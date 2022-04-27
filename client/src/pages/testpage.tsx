import React from 'react'
import CardCompletarUsuario from '../components/Cards/CardCompletarUsuario'

function testpage() {
  return (
    <><CardCompletarUsuario name= "Usuario" email="testing@gmail" action={()=>{return 0}}/></>
  )
}

export default testpage