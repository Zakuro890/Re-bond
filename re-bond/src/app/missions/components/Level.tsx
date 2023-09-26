import { Flex } from '@/components/elements/box/Flex'
import React from 'react'

type Props = {
  level: number
}
type LevelClasses = {
  [key: number]: string
}

const Level = (props: Props) => {
  const selectByLevel:LevelClasses = {
    1: 'bg-level1',
    2: 'bg-level2',
    3: 'bg-level3',
    4: 'bg-level4',
    5: 'bg-level5',
  }

  const selectedLevel = selectByLevel[props.level]
  
  return (
    <Flex
      align='center'
      justify='center'
      className={selectedLevel+' font-bold text-5xl text-white py-6 px-12 rounded-full mb-5'}>
        Lv.{props.level}
    </Flex>
  )
}

export default Level