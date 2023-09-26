import { Flex } from '@/components/elements/box/Flex'
import React from 'react'
import { Profiles } from '../types/profiles'

type Props = {
  profile: Profiles
}

const EditProfile = ({profile}: Props) => {
  return (
    <>
      <Flex
        align='center'
        justify='center'
        className='w-full'>
        <label
          htmlFor='profile'
          className='w-[95%] mb-4'>
          <p className='font-bold text-gray-500'>プロフィールLv.{profile.level}</p>
          <input
            type='field'
            id='profile'
            placeholder={`プロフィールLv.${profile.level}`}
            className='w-full p-3 rounded-sm bg-gray-200'
          />
        </label>
      </Flex>
    </>
  )
}

export default EditProfile