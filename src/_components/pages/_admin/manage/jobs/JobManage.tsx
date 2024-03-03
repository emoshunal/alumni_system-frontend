import  { useState } from 'react'
import Layout from '../../../../layout/Layout'
import Breadcrumbs from '../../../../layout/breadcrumbs/Breadcrumbs'
import JobCatalogue from './table/JobCatalogue'


const JobManage = () => {

  return (
    <Layout>
      
      <Breadcrumbs pageName={'Job'} pageDescription={'Job Catalogue'} />
    
      <JobCatalogue />

   
    </Layout>
  )
}

export default JobManage