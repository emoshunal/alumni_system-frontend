import { useState } from 'react'
import LayoutSchool from '../../layout/LayoutSchool'
import Breadcrumbs from '../../layout/breadcrumbs/Breadcrumbs'
import JobCatalogue from './table/JobCatalogue'
import ShowCreatedJobCheckbox from './others/ShowCreatedJobCheckbox'


const SchooJobPostedComponent = () => {
    const [open, setOpen] = useState<boolean>(false)
    return (
        <LayoutSchool>

            <Breadcrumbs pageName={'Job'} pageDescription={'Job Catalogue'} />
            <div className='grid grid-cols-2'>
                <button className="w-32 cursor-pointer rounded-full  bg-zinc-800 p-2 text-white transition hover:bg-opacity-90 my-3 active:bg-opacity-80"
                    onClick={() => setOpen(true)}> Create Post</button>
                <ShowCreatedJobCheckbox />
            </div>
            <JobCatalogue />
        </LayoutSchool>
    )
}

export default SchooJobPostedComponent