import React from 'react'
import CardSolicitud from '../components/Cards/CardSolicitud'
import Title from '../components/Title/Title'
import CardMiSolicitud from '../components/Cards/CardMiSolicitudNGB'
const AprobarSolicitudes = () => {
  return (
    <div className="w-full">
      <h1 className="text-xl font-bold text-natgas-azul dark:text-gray-100">
        <Title title = "Vacaciones"/>
      </h1>
      <div className=" grid  xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1  py-10 gap-4">
        <CardMiSolicitud name = "Armando Gutiérrez" department= "Recursos Humanos" date = "10 Enero 2022" turn = "Primera parte del día" state = "Aprobado"/>
        <CardMiSolicitud name = "Armando Gutiérrez" department= "Recursos Humanos" date = "10 Enero 2022" turn = "Primera parte del día" state = "Aprobado"/>
        <CardMiSolicitud name = "Armando Gutiérrez" department= "Recursos Humanos" date = "10 Enero 2022" turn = "Primera parte del día" state = "Aprobado"/>
        <CardMiSolicitud name = "Armando Gutiérrez" department= "Recursos Humanos" date = "10 Enero 2022" turn = "Primera parte del día" state = "Aprobado"/>
        
      </div>
    </div>
  )
}

export default AprobarSolicitudes