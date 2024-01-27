import React, { memo } from 'react'

const Button = ({name, handleOnClick, style, iconBefore, iconAfter, fw}) => {
  return (
    <button
    type='button'
    className={`px-4 py-2 rounded-md text-white ${style ? style : 'bg-main'} text-semibold my-2 ${fw ? 'w-full' : 'w-fit'}`}
    onClick={() => {
        handleOnClick && handleOnClick()
    }}
    >
        {iconBefore}
        <span>{name}</span>
        {iconAfter}
    </button>
  )
}

export default memo(Button)