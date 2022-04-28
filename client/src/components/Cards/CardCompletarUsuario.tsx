import React from 'react'
import { Link } from 'react-router-dom';

type Props = {
    name: string,
    email: string,

};

const CardCompletarUsuario = ({ name, email }: Props): JSX.Element => {
  return (
    <div className='w-full h-[166px] rounded-lg border-2 shadow-md dark:bg-natgas-azul dark:border-natgas-azul text-center'>
      <div className='py-0.25 text-center text-2xl font-bold text-natgas-azul mt-2 border-b-4 border-natgas-azul h-1/4 dark:text-white dark:border-white'>{name}</div>
      <div className='mt-2 text-center text-sm font-bold text-natgas-azul dark:text-white'> Desde {email} </div>
     <button className="rounded-full px-8 py-2 bg-natgas-azul text-white mt-4 dark:bg-natgas-azul-claro"> <Link  to={`/app/profile/${email}/complete`}>Registrar</Link></button>
    </div>
  )
}

export default CardCompletarUsuario