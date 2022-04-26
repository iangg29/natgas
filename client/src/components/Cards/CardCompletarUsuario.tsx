import React from 'react'

type Props = {
    name: string,
    email: string,
    action: any,
};

const CardCompletarUsuario = ({ name, email, action }: Props): JSX.Element => {
  return (
    <div className='w-[670px] h-[166px] rounded-lg border-2 shadow-md dark:bg-natgas-azul dark:border-natgas-azul'>
      <div className='py-0.25 text-center text-2xl font-bold text-natgas-azul mt-2 border-b-4 border-natgas-azul h-1/4 dark:text-white dark:border-white'>{name}</div>
      <div className='mt-2 text-center text-sm font-bold text-natgas-azul dark:text-white'> Desde {email} </div>
     <button onClick={action} className=" ml-[39%] rounded-full w-[150px] h-[47px] bg-natgas-azul text-white mt-4 dark:bg-natgas-azul-claro">Registrar</button>
    </div>
  )
}

export default CardCompletarUsuario