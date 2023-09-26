'use client'

import { Flex } from '@/components/elements/box/Flex'
import React, { useState } from 'react'

type LvProps = {
  levels: number[]
  onSelect: (level: number) => void
}
type LevelClasses = {
  [key: number]: string
}

const SelectLvTab = ({levels, onSelect}: LvProps) => {
  const [activeLevel, setActiveLevel] = useState(levels[0])
  
  const selectByLevel:LevelClasses = {
    1: 'level1',
    2: 'level2',
    3: 'level3',
    4: 'level4',
    5: 'level5',
  }

  const selectedLevel = selectByLevel[activeLevel]

  return (
    <>
      <Flex
        justify='center'
        align='center'
        direction='row'
        className={'z-20 mt-5 w-full bg-white border-b-2 border-'+selectedLevel}
      >
        {levels.map((level) => (
          <button
            key={level}
            className='mx-[6px]'
            onClick={()=>{
              onSelect(level)
              setActiveLevel(level)
            }}>
            {activeLevel==level
            ?<Flex
              justify='center'
              align='center'
              className={'bg-'+selectedLevel+' text-white w-[64px] h-[40px] rounded-t-xl'}>
              <h3>Lv.{level}</h3>
            </Flex>
            :<Flex
              justify='center'
              align='center'
              className='bg-gray-100 w-[64px] h-[40px] rounded-t-xl'>
              <h3>Lv.{level}</h3>
            </Flex>
            }
          </button>
        ))}
      </Flex>
    </>
  )
}

export default SelectLvTab