import React from 'react';

type Props = {
    title: string;
    description: string;
    date: string;
};

const CardBlogs = ({
    title,
    description,
    date
}: Props): JSX.Element => {
    return(
        
        <div className='box-border h-96 w-80 rounded-lg  border-2 p-4 shadow-md'>
            <div className='border-b-4 text-2xl text-center font-quicksand-bold border-black'>{title}</div>
            <div className='text-natgas-azul'>{description}</div>
            <div>{date}</div>
        </div>
    )
}

export default CardBlogs;