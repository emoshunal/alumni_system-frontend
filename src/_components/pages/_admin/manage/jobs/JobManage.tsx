import  { useState } from 'react'
import Layout from '../../../../layout/Layout'
import UserTable from './table/JobTable'
import Breadcrumbs from '../../../../layout/breadcrumbs/Breadcrumbs'
import Modal from './modal/Modal'

const JobManage = () => {
   const [open, setOpen] = useState<boolean>(false)
  return (
    <Layout>
      
      <Breadcrumbs pageName={'Alumni'} pageDescription={'Alumni Details'} />
      <button  className="w-32 cursor-pointer rounded-full  bg-zinc-800 p-2 text-white transition hover:bg-opacity-90 my-3 active:bg-opacity-80"
      onClick={() => setOpen(true)}> Create Post</button>
      <UserTable />

      <Modal open={open} onClose={() => setOpen(false)} />
    </Layout>
  )
}

export default JobManage