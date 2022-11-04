import * as React from 'react'

export interface InputProps {
  type?: string
  message?: string
  placeholder?: string
}

export const InputField = ({ message, type, placeholder }: InputProps) => {
  return (
    <div className='mb-6 w-48 m-1'>
      <div className='relative z-0 w-full mb-5 '>
        <input
          type={type}
          name='name'
          placeholder=' '
          required
          className='px-4 focus:outline-none  py-1.3 rounded-lg focus:border-primary  focus:ring-2 focus:ring-black pt-3 pb-2 block w-full px-0 mt-0 bg-disabled   appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200'
        />
        <label
          htmlFor='name'
          className='absolute duration-300  px-4 top-3 -z-1 origin-0 text-sm text-gray'
        >
          {placeholder}
        </label>
        <span className='text-sm text-red-600 hidden' id='error'>
          Name is required
        </span>
      </div>

      {message && (
        <p className='mt-2 text-sm text-danger font-medium animate-bounce'>
          {message}
        </p>
      )}
    </div>
  )
}
