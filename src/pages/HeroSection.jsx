import React from 'react'
import { Data } from '../data'

export const HeroSection = () => {
  return (
    <div className='heroSection'>
      {
        Data.map((datas)=> { 
          return(
            <>
            <div className='heroWrapper'>
              <p>{datas.id}</p>
              <img src={datas.img} alt="" />
              <p>{datas.name}</p>
             </div>
            </>
          )

        })
      }
    </div>
  )
}
