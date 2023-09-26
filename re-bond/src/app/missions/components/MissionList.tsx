'use client'

import { Flex } from '@/components/elements/box/Flex'
import React, { useEffect, useState } from 'react'
import MissionCard from './MissionCard'
import { Missions } from '../types/missions'

type MissionListProps = {
  selectedLv:number
  missionData: Missions[]
  onSelectMission: (mission: Missions) => void
}

const MissionList = ({ selectedLv, missionData, onSelectMission }: MissionListProps) => {
  const [selectedMissions, setSelectedMissions] = useState<Missions[]>([])

  useEffect(() => {
    // selectedLv に応じてミッションデータをフィルタリング
    const filteredMissions = missionData.filter((mission) => mission.level === selectedLv)

    // ランダムに5つのミッションを選択
    const randomMissions = getRandomMissions(filteredMissions, 5)
    setSelectedMissions(randomMissions)

  }, [selectedLv, missionData])
  
  // ランダムにミッションを抽選する関数
  const getRandomMissions = (missions: Missions[], count: number): Missions[] => {
    const shuffledMissions = missions.sort(() => 0.5 - Math.random())
    return shuffledMissions.slice(0, count)
  }

  return (
    <Flex
      align='center'
      justify='center'
      direction='column'
      className='w-full px-12'>
        {selectedMissions.map((mission) => (
          <MissionCard key={mission.id} mission={mission} onSelectMission={() => onSelectMission(mission)} />
        ))}
    </Flex>
  )
}

export default MissionList