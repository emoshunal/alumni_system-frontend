import  { useState } from 'react'
import LayoutSchool from '../../../../layout/LayoutSchool'
import UserTable from './table/AlumniTable'
import Breadcrumbs from '../../../../layout/breadcrumbs/Breadcrumbs'
import Modal from './modal/Modal'

const SchoolAlumniManage = () => {
   const [open, setOpen] = useState<boolean>(false)
  return (
    <LayoutSchool>
      
      <Breadcrumbs pageName={'Alumni'} pageDescription={'Alumni Details'} />
      <button  className="w-32 cursor-pointer rounded-full  bg-zinc-800 p-2 text-white transition hover:bg-opacity-90 my-3 active:bg-opacity-80"
      onClick={() => setOpen(true)}> Create Alumni</button>
      <UserTable />

      <Modal open={open} onClose={() => setOpen(false)} />
    </LayoutSchool>
  )
}

export default SchoolAlumniManage