import { useState, ChangeEvent, useEffect } from 'react'
import Layout from '../../../../../layout/Layout'
import Breadcrumbs from '../../../../../layout/breadcrumbs/Breadcrumbs'
import IUsers from '../../../../../../_types/IUsers'
import UserService from '../../../../../../_services/Service'
import { useParams, useNavigate } from 'react-router-dom'



const UpdateUser: React.FC = () => {
    const [isOptionSelectedEmp, setIsOptionSelectedEmp] = useState<boolean>(true);
    const [isOptionSelectedRole, setIsOptionSelectedRole] = useState<boolean>(true);

    const changeTextColorEmp = () => {
        setIsOptionSelectedEmp(true);
    }
    const changeTextColorRole = () => {
        setIsOptionSelectedRole(true);
    }
    const { id } = useParams();
    const navigate = useNavigate();
    const initialState = {
        id: null,
        name: '',
        email: '',
        batch: 0,
        course: '',
        employment: '',
        role: '',
        password: '',
    };

    const [currentUser, setCurrentUser] = useState<IUsers>(initialState);
    const [message, setMessage] = useState<string>("")

    const getUser = (id: string) => {
        UserService.getUserId(id)
            .then((response: any) => {
                setCurrentUser(response.data.userId)
                console.log(response.data.userId)
            })
            .catch((e: Error) => {
                console.log(e)
            })
    }

    useEffect(() => {
        if (id)
            getUser(id)
    }, [id])

    const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        setCurrentUser({ ...currentUser, [name]: value });
    };

    const updateUser = () => {
        UserService.updateUser(currentUser.id, currentUser)
            .then((response: any) => {
                console.log(response.data.message)
                setMessage(response.data.message)
                navigate('/admin/manage/user')
            })
            .catch((e: Error) => {
                console.log(e)
            })
        console.log(currentUser);
    }
    return (
        <Layout>

            <Breadcrumbs pageName={'User'} pageDescription={'User'} />
            <button 
            onClick={() => navigate('/admin/manage/user')}
            className="w-32 cursor-pointer rounded-full  bg-zinc-800 p-2 text-white transition hover:bg-opacity-90 my-3 active:bg-opacity-80"
            > Go back</button>

            <div className="md:px-17.5 w-full  rounded-lg bg-white px-8 py-12  dark:bg-boxdark md:py-15">
                <h3 className="pb-2 text-xl font-bold text-black dark:text-white sm:text-2xl">Update Details</h3>
                <span className="mx-auto mb-6 inline-block h-1 w-22.5 rounded bg-primary"></span>

                <div className='flex flex-col gap-6 xl:flex-row'>
                    <div className="mb-4 w-full xl:w-1/2">
                        <label className="mb-2.5 block font-medium text-black dark:text-white">
                            Name
                        </label>
                        <div className="relative">
                            <input
                                id='name'
                                name='name'
                                value={currentUser.name}
                                onChange={handleInputChange}
                                type="text"
                                placeholder="Enter your email"
                                className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            />
                        </div>
                    </div>
                    <div className="mb-4 w-full xl:w-1/2">
                        <label className="mb-2.5 block font-medium text-black dark:text-white">
                            Email
                        </label>
                        <div className="relative">
                            <input
                                id='email'
                                name='email'
                                value={currentUser.email}
                                onChange={handleInputChange}
                                type="email"
                                placeholder="Enter your password"
                                className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-6 xl:flex-row'>
                    <div className="mb-6 w-full xl:w-1/2">
                        <label className="mb-2.5 block font-medium text-black dark:text-white">
                            Course
                        </label>
                        <div className="relative">
                            <input
                                id="course"
                                name='course'
                                value={currentUser.course}
                                onChange={handleInputChange}
                                type="text"
                                placeholder="Enter your password"
                                className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            />
                        </div>
                    </div>
                    <div className="mb-6 w-full xl:w-1/2">
                        <label className="mb-2.5 block font-medium text-black dark:text-white">
                            Batch
                        </label>
                        <div className="relative">
                            <input
                                id="batch"
                                name='batch'
                                value={currentUser.batch}
                                onChange={handleInputChange}
                                type="number"
                                placeholder="Enter Year Graduated"
                                className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-6 xl:flex-row'>
                    <div className="mb-6 w-full xl:w-1/2">
                        <select
                            name='employment'
                            id  = 'employment'
                            value={currentUser.employment}
                            onChange={handleInputChange}
                            // onChange={(e) => {
                            //   setSelectedOption(e.target.value);
                            //   changeTextColor();
                            // }}
                            className={`relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-12 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input ${isOptionSelectedEmp ? 'text-black dark:text-white' : ''
                                }`}
                        >
                            <option value="" disabled className="text-body dark:text-bodydark">
                                Select Employment
                            </option>
                            <option value="Employed" className="text-body dark:text-bodydark">
                                Employed
                            </option>
                            <option value="Unemployed" className="text-body dark:text-bodydark">
                                Unemployed
                            </option>
                            <option value="Others" className="text-body dark:text-bodydark">
                                Others
                            </option>
                        </select>
                    </div>
                    <div className="mb-6 w-full xl:w-1/2">
                        <select
                            name='role'
                            id='role'
                            value={currentUser.role}
                            onChange={handleInputChange}
                            className={`relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-12 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input ${isOptionSelectedRole ? 'text-black dark:text-white' : ''
                                }`}
                        >
                            <option value="" disabled className="text-body dark:text-bodydark">
                                Select Role
                            </option>
                            <option value="Co-Admin" className="text-body dark:text-bodydark">
                                Co-Admin
                            </option>
                            <option value="Alumni" className="text-body dark:text-bodydark">
                                Alumni
                            </option>
                            <option value="HR" className="text-body dark:text-bodydark">
                                HR
                            </option>
                        </select>

                    </div>
                </div>
                {/* <input
                    id="employment"
                    name='employment'
                    value={currentUser.employment}
                    onChange={handleInputChange}
                    type="text" className="w-full-width" placeholder=":" />
               

                <div className="mb-6">
                    <input
                        id="role"
                        name='role'
                        value={currentUser.role}
                        onChange={handleInputChange}
                        type="text" className="w-full-width" placeholder=":" />
                  
                </div> */}

                <div className="2xsm:w-1/2 w-full px-3">
                    <button
                        onClick={updateUser}
                        className="block w-full rounded-full border border-stroke  bg-zinc-800 p-3 text-center font-medium text-white transition hover:bg-opacity-90 active:bg-opacity-80">
                        Update</button>
                </div>
            </div>
        </Layout >
    )
}

export default UpdateUser