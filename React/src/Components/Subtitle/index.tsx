import React from 'react'

interface SubtitleProps{
    title: string,
    description: string
    className?: string
}

const Subtitle : React.FC<SubtitleProps> = ({title, description, className}) => {
  return (
    <div>
      <h1 className={className}>{title}</h1>
      <p className='text-accent text-[20px] pt-7'>{description}</p>
    </div>
  )
}

export default Subtitle
