import * as React from 'react'

type Props = {
  title?: string
  imgUrl?: string
  downloads?: string
  rating?: string
}

export const Card = <PROPS extends Props>({
  imgUrl,
  title,
  downloads,
  rating
}: PROPS): JSX.Element => {
  return (
    <div className='inline-flex m-4 flex-col items-center justify-end w-64 h-72 pl-0.5 pb-2'>
      <div
        className='relative bg-gray-300 rounded-2xl'
        style={{ width: '258px', height: '193px' }}
      >
        <img className='w-64 h-48 rounded-2xl' src={imgUrl} />
      </div>
      <div className='inline-flex space-x-8 items-center justify-start'>
        <p className='w-36 h-6 text-sm font-semibold leading-normal'>{title}</p>
        <div className='flex space-x-2.5 items-start justify-start'>
          <div className='flex space-x-0.5 items-center justify-start'>
            <img
              className='w-3 h-3 rounded-full'
              src='https://via.placeholder.com/12x12'
            />
            <p className='text-xs font-medium leading-7 text-gray-600'>
              {downloads}
            </p>
          </div>
          <div className='flex space-x-0.5 items-center justify-start'>
            <img
              className='w-3 h-3 rounded-full'
              src='https://via.placeholder.com/12x12'
            />
            <p className='text-xs font-medium leading-7 text-gray-600'>
              {rating}
            </p>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-start justify-start'>
        <div className='inline-flex space-x-5 items-start justify-start'>
          <div className='flex space-x-1 items-center justify-start'>
            <img
              className='w-3 h-3 rounded-full'
              src='https://via.placeholder.com/12x12'
            />
            <p className='text-xs leading-7 text-gray-600'>iOS</p>
          </div>
          <div className='flex space-x-1 items-center justify-start'>
            <img
              className='w-3 h-3 rounded-full'
              src='https://via.placeholder.com/12x12'
            />
            <p className='text-xs leading-7 text-gray-600'>Adroid</p>
          </div>
          <div className='flex space-x-1 items-center justify-start'>
            <img
              className='w-3 h-3 rounded-full'
              src='https://via.placeholder.com/12x12'
            />
            <p className='text-xs leading-7 text-gray-600'>Web</p>
          </div>
        </div>
        <div className='inline-flex space-x-1 items-center justify-start'>
          <img
            className='w-3 h-3 rounded-full'
            src='https://via.placeholder.com/12x12'
          />
          <p className='text-xs leading-7 text-gray-600'>
            Stack: Linux, MySQL, C#
          </p>
        </div>
      </div>
    </div>
  )
}
