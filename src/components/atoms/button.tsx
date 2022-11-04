import * as React from 'react'

export interface Props {
  text: string
  disabled?: boolean
}

export const Button = ({ text, disabled }: Props) => {
  return (
    <button
      className={`${
        disabled ? 'bg-disabled' : 'bg-primary'
      } text-white text-sm font-extrabold py-1.2 m-1 px-6 rounded w-44 font-poppins-300`}
    >
      {text}
    </button>
  )
}
