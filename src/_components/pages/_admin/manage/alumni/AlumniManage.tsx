import  { useState } from 'react'
import Layout from '../../../../layout/Layout'
import UserTable from './table/AlumniTable'
import Breadcrumbs from '../../../../layout/breadcrumbs/Breadcrumbs'
import Modal from './modal/Modal'

const AlumniManage = () => {
   const [open, setOpen] = useState<boolean>(false)
  return (
    <Layout>
      
      <Breadcrumbs pageName={'Alumni'} pageDescription={'Alumni Details'} />
      
      <UserTable />

      <Modal open={open} onClose={() => setOpen(false)} />
    </Layout>
  )
}

export default AlumniManage