import { Flex } from '@/components/elements/box/Flex'
import React from 'react'

const InProgress = () => {
  return (
    <>
      <Flex
        align='center'
        direction='column'
        className='mb-3'>
          <div className='bg-gray-200 p-5 w-full mb-5 text-center'>
            ミッション進行中…ʕ◔ϖ◔ʔ
          </div>
      </Flex>
    </>
  )
}

export default InProgress