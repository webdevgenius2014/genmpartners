import React from 'react'
// import { Button } from '@material-tailwind/react'
const ActionButton = ({btnType, btnText, btnAction, }) => {
  return (
    <button
      buttonType={btnType?btnType:"filled"}
      size="regular" 
      ripple="light" // Ripple effect color (light/dark)
      className={`inline-flex items-center justify-center rounded-[36px] px-8 py-4 min-w-[113px] transition-all duration-300 ${btnType==="filled"?"bg-gradient-to-r from-98.88deg from-[#35AFF8] via-2.99% to-[#0548A8] to-102.28% text-white border-primary-200 border hover:from-white hover:to-white hover:text-primary-200":btnType==="bordered"?'bg-white text-primary-200 border border-primary-200 hover:bg-gradient-to-r from-98.88deg from-[#35AFF8] via-2.99% to-[#0548A8] to-102.28% hover:text-white':'bg-white border border-black text-black'}`}
      onClick={()=>btnAction()}
    >
      <span className='font-bold uppercase text-15xl'>{btnText}</span>
    </button>
  )
}

export default ActionButton