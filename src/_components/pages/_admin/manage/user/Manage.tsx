
import Layout from '../../../../layout/Layout'
import UserTable from './table/UserTable'
import Breadcrumbs from '../../../../layout/breadcrumbs/Breadcrumbs'

const Manage = () => {
  // const [open, setOpen] = useState<boolean>(false)

  return (
    <Layout>

      <Breadcrumbs pageName={'User'} pageDescription={'User Details'} />
      {/* <button className="w-32 cursor-pointer rounded-full  bg-zinc-800 p-2 text-white transition hover:bg-opacity-90 my-3 active:bg-opacity-80"
        onClick={() => setOpen(true)}> Create Users</button>
      <div className='flex flex-items-center pb-2'>
        <input
          type="text"
          placeholder="Type to search..."
          className="w-1/2 rounded-full border border-stroke py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
        />
      </div> */}
      <UserTable />
      {/* <Modal open={open} onClose={() => setOpen(false)} onSubmitClickHnd={(data: IUsers) => console.log(data)} /> */}
    </Layout>
  )
}

export default Manage