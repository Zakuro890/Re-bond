'use client'

import { Flex } from '@/components/elements/box/Flex'
import { useCustomRouter } from '@/hooks/useCustomRouter'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type FooterClasses = {
  name: string
  sub: string
  icon_path: string
  path: string
}

const Footer = () => {
  const { IsActive } = useCustomRouter()

  const BUTTON:FooterClasses[] = [
    {
      name: 'ホーム',
      sub: 'Home',
      icon_path: '/home.svg',
      path: '/home'
    },
    {
      name: 'QRコード',
      sub: 'QRcode',
      icon_path: '/qr.svg',
      path: '/qr-code'
    },
    {
      name: 'フレンド',
      sub: 'Friend',
      icon_path: '/friend.svg',
      path: '/friend'
    },
    {
      name: 'メッセージ',
      sub: 'message',
      icon_path: '/dm.svg',
      path: '/message'
    },
    {
      name: 'プロフィール',
      sub: 'prof-settings',
      icon_path: '/settings.svg',
      path: '/prof-settings'
    }
  ]
  return (
    <>
      <Flex
        justify='center'
        align='center'
        direction='row'
        className='fixed bottom-0 z-30 w-full h-[80px] bg-white border-t-2 border-baseBlue'
      >
        {BUTTON.map((button, index) => (
          <Link href={button.path} key={index}>
            {IsActive(button.path)
              ?<Flex
                align='center'
                justify='center'
                direction='column'
                className='w-[77px] h-[79px] bg-baseBlue'>
                <Image
                  src={'/footer/active' + button.icon_path}
                  width={36}
                  height={36}
                  alt={button.sub}
                  className='mt-2'
                />
                <p className='text-white text-[0.5rem] leading-[0.5rem] pt-1'>{button.name}</p>
              </Flex>

              :<Flex
                align='center'
                justify='center'
                className='w-[77px] h-[79px] bg-white active:bg-blue-100'>
                <Image
                  src={'/footer' + button.icon_path}
                  width={38}
                  height={38}
                  alt={button.sub}
                />
              </Flex>
            }
          </Link>
        ))}
      </Flex>
    </>
  )
}

export default Footer