import React from 'react'

const EmaptyPage = ({icon,title,subtitle}) => {
    const Icon=icon
  return (
    <div className='h-[calc(100vh-64px)] flex flex-col items-center justify-center gap-4'>
        <div>
            <Icon className=' size-32 fill-primary'/>
        </div>
        <h1 className='font-bold text-2xl'>{title}</h1>
        <p>{subtitle}</p>
    </div>
  )
}

export default EmaptyPage
