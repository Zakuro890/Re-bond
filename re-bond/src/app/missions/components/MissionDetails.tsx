import React from 'react'
import { Missions } from '../types/missions'
import { Flex } from '@/components/elements/box/Flex'
import Level from './Level'
import Title from './Title'
import Require from './Require'

type MissionProps = {
  mission: Missions
  Deactivate: () => void
  Success: () => void
}

const MissionDetails = ({mission, Deactivate, Success}: MissionProps) => {
  return (
    <div className='m-5'>
      <h3 className='mb-3'>選択中のミッション</h3>
      <Flex
        align='center'
        justify='center'
        direction='column'
        className='mx-5'>
        <Level level={mission.level} />
        <Title
          title={mission.name}
          className='flex justify-center flex-wrap
            text-center border-2 border-baseBlue rounded-3xl p-10 w-full text-4xl mb-5'
        />

        <Require
          require={mission.require}
        />

        {/* ミッション達成 */}
        <button
          onClick={Success}
          className='bg-baseBlue rounded-full text-white p-3 w-[90%] text-xl mb-5 active:bg-blue-800'
        >
          達成
        </button>

        <button
          onClick={Deactivate}
          className='bg-baseBlue rounded-full text-white p-3 w-[90%] text-xl my-5 active:bg-blue-800'
        >
          ミッションの変更
        </button>
      </Flex>
    </div>
  )
}

export default MissionDetails