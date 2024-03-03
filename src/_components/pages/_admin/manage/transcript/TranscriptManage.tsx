import React, { useState } from 'react'
import Layout from '../../../../layout/Layout'
import Breadcrumbs from '../../../../layout/breadcrumbs/Breadcrumbs'
import Modal from './modal/Modal'

const TranscriptManage = () => {
    const [open, setOpen] = useState<boolean>(false)

  return (
    <Layout>
      
      <Breadcrumbs pageName={'Transcript'} pageDescription={'Transcript Details'} />
      <button  className="w-40 cursor-pointer rounded-full  bg-zinc-800 p-2 text-white transition hover:bg-opacity-90 my-3 active:bg-opacity-80"
      onClick={() => setOpen(true)}> Upload Transcript</button>


      <Modal open={open} onClose={() => setOpen(false)} />
    </Layout>
  )
}

export default TranscriptManage