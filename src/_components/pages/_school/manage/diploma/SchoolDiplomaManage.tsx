import React, { useState } from 'react'
import LayoutSchool from '../../../../layout/LayoutSchool'
import Breadcrumbs from '../../../../layout/breadcrumbs/Breadcrumbs'
import Modal from './modal/Modal'

const SchoolDiplomaManage = () => {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <LayoutSchool>
      
      <Breadcrumbs pageName={'Diploma'} pageDescription={'Diploma Details'} />
      <button  className="w-40 cursor-pointer rounded-full  bg-zinc-800 p-2 text-white transition hover:bg-opacity-90 my-3 active:bg-opacity-80"
      onClick={() => setOpen(true)}> Upload Diploma</button>


      <Modal open={open} onClose={() => setOpen(false)} />
    </LayoutSchool>
  )
}

export default SchoolDiplomaManage