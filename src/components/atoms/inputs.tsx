import * as React from 'react'

export interface InputProps {
  text?: string
  type?: string
  message?: string
  success?: boolean
  disabled?: boolean
  placeholder?: string
}

export const InputField = ({ message, type, placeholder }: InputProps) => {
  return (
    <div className='mb-6 w-48 m-1'>
      <input
        type={type}
        className='bg-disabled px-4  focus:outline-none focus:border-primary  focus:ring-2 focus:ring-black py-1.3  placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500'
        placeholder={placeholder}
      />
      {message && (
        <p className='mt-2 text-sm text-danger font-medium animate-bounce'>
          {message}
        </p>
      )}
    </div>
  )
}
