'use client'
import React, {  useEffect, useState } from 'react'

const Block = () => {

    // 
    
    const [data, setData] = useState([{Action: "",Message: ""}]);
    useEffect(() => {
      fetch('https://sheetdb.io/api/v1/sa9n9w0cd7yro')
        .then((response) => response.json())
        .then((data) => setData(data));
    
  }, [data])

  return (
    <div>
        {
            data[0].Action == "Blocked" &&
            
            <div className='w-full bg-[#f14f44] text-white text-center py-2 px-3 fixed top-0 left-0 z-[1000] bottom-0 right-0 flex justify-center items-center'>
                <p className='text-[22px] sm:text-4xl font-medium'>{data[0].Message}</p>
            </div>
            
        }
    </div>
  )
}

export default Block
