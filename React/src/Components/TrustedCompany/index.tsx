import React from 'react'

interface companiesProps{
  amount: string,
  icons: any,
  text: string,
}

const Companies: React.FC<companiesProps> = ({amount, icons, text}) => {
  return (
    <div className='flex flex-col items-center bg-white border border-primary border-solid shadow-2xl text-accent p-5 rounded-lg w-40'>
      <h1 className='font-bold text-3xl pb-4'>{amount}</h1>
      <div>{icons}</div>
      <p className='font-medium text-lg pt-5'>{text}</p>
    </div>
  )
}

export default Companies
