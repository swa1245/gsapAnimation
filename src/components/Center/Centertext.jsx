import React from 'react'
import HeroText from './HaroText'
import SubHead from './SubHead'

const Centertext = () => {
  return (
    <div className='absolute text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
      <HeroText/>
      <SubHead/>
    </div>
  )
}

export default Centertext
