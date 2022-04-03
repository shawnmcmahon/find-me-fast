import React, { useEffect } from 'react'

export default function Home() {
   
  useEffect(() => {
    console.log('home mounted');
  });

  return (
    <div className='className="text-3xl font-bold underline"'>Home components</div>
  )
}
