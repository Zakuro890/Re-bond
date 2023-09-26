"use client"
import { Flex } from '@/components/elements/box/Flex'
import Footer from '@/components/layouts/footer/Footer'
import React from 'react'
import QRCode from 'qrcode.react'
import {BiSolidDownload} from 'react-icons/bi'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import Qrpdf from './components/Qrpdf'
import Header from '@/components/layouts/header/Header'

const page = () => {
  const qrCodeValue = 'https://google.com' // QR コードに表示する値を設定

  const pdfDownloadHandler = () => {
    const target = document.getElementById('pdf-id')
    if (!target) return

    html2canvas(target, {scale: 2.5}).then((canvas) => {
      const imgData = canvas.toDataURL('image/svg', 1.0)
      let pdf = new jsPDF()
      pdf.addImage(imgData, 'SVG', 5, 10, canvas.width / 18, canvas.height / 18)
      pdf.save(`qrcode.pdf`)
    })
  }

  return (
    <>
      <Header />
      <main className='w-full h-screen bg-gray-900 m-0'>
        <Flex
          direction='column'
          align='center'
          className='p-5'
        >
          <h2 className='mb-5 text-gray-200'>QRコード</h2>
          <Flex
            align='center'
            justify='center'
            className='mb-5 p-7 bg-white rounded-xl'
            >
            <QRCode value={qrCodeValue} size={300}/>
          </Flex>
          
          <p className='text-gray-500 font-bold m-2'>この画面をスキャナーにかざしてください</p>
          <p className='text-gray-500 font-bold m-2'>上手く読み込めない場合は画面の明るさを調整してください</p>

          <button
            onClick={pdfDownloadHandler}
            className='bg-baseBlue rounded-full text-white p-3 w-[80%] text-xl my-5 active:bg-blue-800'>
            <Flex
              align='center'
              justify='center'
              direction='row'>
              <BiSolidDownload className='w-[20px] h-[25px] mx-2'/>PDFダウンロード
            </Flex>
          </button>

          <Qrpdf qrcodevalue={qrCodeValue} />
        </Flex>
      </main>
      <Footer />
    </>
  );
};

export default page
