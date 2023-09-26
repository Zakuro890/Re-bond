import { Flex } from '@/components/elements/box/Flex'
import React, { useState } from 'react'

type Props = {
  closeModal: (selectedValue: string) => void
}

const SettingsModal = ({closeModal}: Props) => {
  const [selectedValue, setSelectedValue] = useState('Orange')

  const handleRadioChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(e.target.value)
  }

  const handleSave = () => {
    closeModal(selectedValue)
  }

  return (
    <>
      {/* 背景 */}
      <button
        onClick={() => closeModal(selectedValue)}
        className='fixed z-10 top-0 left-0 bg-black/30 w-full h-screen'
      />
        <Flex
          align='center'
          justify='center'
          direction='column'
          className='absolute top-1/3 bg-white p-6 m-10 h-auto z-20'>
          <h3>プロフィールカードの色をカスタマイズする</h3>
          <Flex
            align='center'
            justify='center'
            direction='row'
            className='bg-gray-100 w-full p-6 m-4'>
            <input
              type='radio'
              value='Orange'
              checked={selectedValue === 'Orange'}
              onChange={handleRadioChange}
            />
            <input
              type='radio'
              value='Violet'
              checked={selectedValue === 'Violet'}
              onChange={handleRadioChange}
            />
            <input
              type='radio'
              value='Green'
              checked={selectedValue === 'Green'}
              onChange={handleRadioChange}
            />
            <input
              type='radio'
              value='Sky'
              checked={selectedValue === 'Sky'}
              onChange={handleRadioChange}
            />
            <input
              type='radio'
              value='Blue'
              checked={selectedValue === 'Blue'}
              onChange={handleRadioChange}
            />
          </Flex>
          <button onClick={handleSave}>保存</button>
        </Flex>
    </>
  )
}

export default SettingsModal