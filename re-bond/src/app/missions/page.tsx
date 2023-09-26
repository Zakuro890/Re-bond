'use client'

import { Flex } from '@/components/elements/box/Flex'
import Footer from '@/components/layouts/footer/Footer'
import React, { useEffect, useState } from 'react'
import SelectLvTab from './components/SelectLvTab'
import MissionList from './components/MissionList'
import { getDocs } from 'firebase/firestore'
import { collectionRef } from '../../../firebase/firebase'
import { Missions } from './types/missions'
import MissionDetails from './components/MissionDetails'
import Header from '@/components/layouts/header/Header'

const page = () => {
  const [selectedLv, setSelectedLv] = useState(1)
  const [missionData, setMissionData] = useState<Missions[]>([])

  const [selectedMission, setSelectedMission] = useState<Missions | null>(null)

  const [isSuccess, setIsSuccess] = useState<Missions | null>(null)

  // ページ表示時にミッションデータをフェッチ
  useEffect(() => {
    const fetchMissions = async () => {
      try {
        const querySnapshot = await getDocs(collectionRef)
        const missionsData: Missions[] = querySnapshot.docs.map((doc) => doc.data() as Missions)
        setMissionData(missionsData)
      } catch (error) {
        console.log('Error fetching missions:', error)
      }
    }
    fetchMissions()
  }, [])

  const closeDetail = () => {
    setSelectedMission(null)
    setIsSuccess(null)
    setSelectedLv(1)
  }

  const MissionSuccess = () => {
    setIsSuccess(selectedMission)
    setSelectedMission(null)
    setSelectedLv(1)
  }

  return (
    <>
      <Header />
      <main>
        <Flex
          direction='column'
          className='w-full h-auto'>
          
          {!selectedMission
            ?<>
              <SelectLvTab levels={[1,2,3,4,5]} onSelect={setSelectedLv}/>
              {isSuccess &&
              <Flex
                align='center'
                justify='center'
                direction='column'
                className='p-5'>
                <h2 className='text-3xl mb-3'>Congratulations!</h2>
                <p>次に取り組むミッションを選びましょう！</p>
              </Flex>
              }
              <MissionList selectedLv={selectedLv} missionData={missionData} onSelectMission={setSelectedMission} />
            </>
          
            // ミッションカードコンポーネントで任意のミッションが選ばれたときに表示
            :<MissionDetails mission={selectedMission} Deactivate={closeDetail} Success={MissionSuccess} />
          }
        </Flex>
      </main>
      <Footer />
    </>
  )
}

export default page