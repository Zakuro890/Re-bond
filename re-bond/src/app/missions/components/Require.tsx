'use client'

import { Flex } from '@/components/elements/box/Flex'
import React, { useState } from 'react'
import { ref, uploadBytes } from 'firebase/storage'

type Props = {
  require: boolean
}

const Require = ({require}: Props) => {
  const [imagePath, setImagePath] = useState<string | null>()

  // const handleUpload = async(e: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0]
  //   if(file){
  //     const storageRef = ref(storage, 'image/' + file.name)
  //     uploadBytes(storageRef, file ).then((snapshot) => {
  //       console.log('hogehoge')
  //     })

  //   }
  // }
  return (
  <>
    <Flex
      align='flex-start'
      className='w-full mb-2 text-xl'>
      ミッション達成条件
    </Flex>
    {!require
    ? <Flex
        align='flex-start'
        className='border-2 border-baseBlue rounded-3xl p-10 w-full text-2xl mb-5'>
        ・なし
      </Flex>
    : <Flex
        justify='center'
        align='center'
        className='border-2 border-baseBlue rounded-3xl p-10 w-full text-2xl mb-5'>
        <input
          id='requirements'
          type='file'
          accept='.png, .jpeg, .jpg'
          className='hidden'
        />
        <label
          htmlFor='requirements'
          className='bg-baseBlue rounded-full text-white p-3 w-[90%] text-xl text-center cursor-pointer'>
          写真をアップロード
        </label>
      </Flex>
    }
  </>
  )
}

export default Require