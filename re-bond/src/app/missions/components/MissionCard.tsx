import { Flex } from '@/components/elements/box/Flex'
import React, { useState } from 'react'
import { Missions } from '../types/missions'
import Title from './Title'

type MissionProps = {
  mission: Missions
  onSelectMission: () => void
}

const MissionCard = ({mission, onSelectMission }:MissionProps) => {

  const ActivateMission = () => {
      onSelectMission()
      console.log('MissionActivated')
  }

  return (
    <>
      <button
        onClick={ActivateMission}
        className='bg-gray-200 px-5 py-3 w-full mt-3'>
        <Flex
          align='center'
          justify='space-between'
          direction='row'
        >
            <Title title={mission.name}/>
        </Flex>
      </button>
    </>
  )
}

export default MissionCard