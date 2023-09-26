'use client'

import { Flex } from '@/components/elements/box/Flex'
import { Users } from '@/types/users'
import Image from 'next/image'
import React, { useState } from 'react'
import SettingsModal from './SettingsModal'

type Props = {
  user: Users
}

const ProfileCard = (props: Props) => {
  const [isModal, setIsModal] = useState<boolean>(false)

  const COLERTHEMES:string[] = [
    'Orange',
    'Violet',
    'Green',
    'Sky',
    'Blue',
  ]

  const handleThemeSettings = () => {
    if(!isModal){
      setIsModal(true)
    }
    console.log('theme setting opened')
  }

  const closeModal = () => {
    if(isModal){
      setIsModal(false)
    }
    console.log('settings modal closed')
  }

  return (
    <>
      <Flex
        align='center'
        justify='space-between'
        direction='row'
        className='w-[360px] h-[200px] rounded-[47px] bg-orange-500 m-4'>
        <Image
          src={props.user.avatar}
          width={200}
          height={200}
          alt='avatarImage'
          className='rounded-l-[47px] h-full'
        />
        <Flex
          align='flex-start'
          justify='center'
          direction='column'
          className='w-full'>
            {/* 名前の設定 */}
            <h3 className='flex text-white h-[60px] items-center flex-wrap mx-4 mb-4'>
              {props.user.name}
            </h3>

            {/* テーマカラーの設定 */}
            <label
              htmlFor='theme'
              className='text-white leading-[1.4rem] text-3xl pl-2 pt-2 pb-1 ml-2 mr-6 rounded-md
                hover:bg-white/40 cursor-pointer'>
              {props.user.theme}
              <button
                id='theme'
                onClick={handleThemeSettings}
                className='pl-[2px] text-[0.4rem] font-light'>
                テーマカラーの変更
              </button>
            </label>
        </Flex>
      </Flex>

      {/* モーダル表示 */}
      {isModal&&
        <SettingsModal closeModal={closeModal} />
      }
    </>
  )
}

export default ProfileCard