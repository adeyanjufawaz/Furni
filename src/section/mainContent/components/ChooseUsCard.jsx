import React from 'react'

function ChooseUsCard({icon:Icon,title,content}) {
  return (
    <div className='flex flex-col gap-2'>
        <Icon size={30} />
        <h2 className='text-sm font-bold'>{title}</h2>
        <p className='text-xs '>{content}</p>
        
    </div>
  )
}

export default ChooseUsCard