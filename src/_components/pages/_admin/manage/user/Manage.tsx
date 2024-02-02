import  { useState } from 'react'
import Layout from '../../../../layout/Layout'
import UserTable from './table/UserTable'
import Breadcrumbs from '../../../../layout/breadcrumbs/Breadcrumbs'
import Modal from './modal/Modal'

const Manage = () => {
   const [open, setOpen] = useState<boolean>(false)
  return (
    <Layout>
      
      <Breadcrumbs pageName={'User'} pageDescription={'User Details'} />
      <button  className="w-32 cursor-pointer rounded-full  bg-zinc-800 p-2 text-white transition hover:bg-opacity-90 my-3 active:bg-opacity-80"
      onClick={() => setOpen(true)}> Create User</button>
      <UserTable />

      <Modal open={open} onClose={() => setOpen(false)} />
    </Layout>
  )
}

export default Manage