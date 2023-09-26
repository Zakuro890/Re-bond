import { Flex } from '@/components/elements/box/Flex'
import React from 'react'
import QRCode from 'qrcode.react'

type Props = {
  qrcodevalue: string
}

const Qrpdf = ({qrcodevalue}: Props) => {
  return (
    <>
      <div id='pdf-id' className='absolute top-0 left-0 bg-white w-full h-screen -z-10'>
        <Flex
          align='center'
          justify='center'
          direction='column'
          className='py-10'>
            <h1 className='mb-10'>Re:Bondユーザー認証用QRコード</h1>
          <QRCode value={qrcodevalue} size={300}/>
        </Flex>
      </div>
    </>
  )
}

export default Qrpdf