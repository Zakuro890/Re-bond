import { Flex } from '@/components/elements/box/Flex'
import Link from 'next/link'
import React from 'react'

const UserList = () => {
  return (
    <>
      <Flex
        align='center'
        direction='column'
        className='mb-3'>
          <Link href={'/missions'} className='bg-gray-200 p-5 w-full mb-5 text-center'>
              ミッション一覧へ
          </Link>
      </Flex>
    </>
  )
}

export default UserList