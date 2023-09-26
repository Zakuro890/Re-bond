import React from 'react'
import { Flex } from '@/components/elements/box/Flex'
import EditProfile from './components/EditProfile'
import Footer from '@/components/layouts/footer/Footer'
import Header from '@/components/layouts/header/Header'
import { Profiles } from './types/profiles'
import ProfileCard from './components/ProfileCard'
import { Users } from '@/types/users'

const page = () => {
  const DUMMYUSER:Users = {
    id: 0,
    avatar: '/avatars/defaultAvatar.png',
    name: 'ほげほげお',
    theme: 'Violet',
    email: 'hogehoge123@gmail.com',
    password_hash: 'hogehogehoge',
  }

  const PROFILES:Profiles[] = [
    {
      id: 0,
      level: 0,
      profile: null
    },
    {
      id: 1,
      level: 1,
      profile: null
    },
    {
      id: 2,
      level: 2,
      profile: null
    },
    {
      id: 3,
      level: 3,
      profile: null
    },
    {
      id: 4,
      level: 4,
      profile: null
    },
    {
      id: 5,
      level: 5,
      profile: null
    },
  ]

  return (
    <>
      <Header />
      <main>
        <Flex
          align='center'
          direction='column'
          className='w-full h-auto'>

          {/* プロフィールカードの設定 */}
          <ProfileCard user={DUMMYUSER}/>

          {/* プロフィール設定リスト */}
          <Flex
            align='flex-start'
            justify='center'
            direction='column'
            className='w-full px-8'>
            <h2 className='mb-3'>プロフィールの設定</h2>
            {PROFILES.map((profile, index) => (
              <EditProfile profile={profile} key={index} />
            ))}
          </Flex>

          {/* メールアドレス変更 */}

          {/* パスワード変更 */}

          {/* ログアウト */}
          <button className='w-full p-4 border-b-2 border-gray-300'>
            <Flex
            align='center'
            justify='center'>
              ログアウト
            </Flex>
          </button>
          {/* アカウント削除 */}
          <button className='w-full p-4 border-b-2 border-gray-300'>
            <Flex
            align='center'
            justify='center'
            className='text-red-500'>
              アカウント削除
            </Flex>
          </button>
        </Flex>
      </main>
      <Footer />
    </>
  )
}

export default page