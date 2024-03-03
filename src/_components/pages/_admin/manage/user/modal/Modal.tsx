import React, { useState } from 'react'
import SelectEmployment from '../form-select/SelectEmployment';
import UserService from '../../../../../../_services/Service'
import IUsers from '../../../../../../_types/IUsers';
import SelectRole from '../form-select/SelectRole';

type propTypes = {
    open: boolean;
    onClose: () => void;
    onSubmitClickHnd: (data: IUsers) => void;
    retrieveUsers: () => void;

}

const Modal: React.FC<propTypes> = ({ open, onClose, onSubmitClickHnd, retrieveUsers}) => {
    const initialState = {
        name: "",
        email: "",
        employment: "",
        role: "",
        id: null,
        batch: 1950,
        course: "",
        password: "",
    };
    
    const [formData, setFormData] = useState<IUsers>(initialState);
    const [submitted, setSubmitted] = useState<boolean>(false);
    const [employmentStatus, setEmploymentStatus] = useState<string>('');
    const [roleType, setRoleType] = useState<string>('');
    

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const saveUser = () => {
        var data = {
            name: formData.name,
            email: formData.email,
            employment: employmentStatus,
            role: roleType,
            batch: formData.batch,
            course: formData.course,
            password: formData.email,
        };
        console.log(data)
        UserService.create(data)
            .then((response: any) => {
                setFormData({
                    name: response.data.name,
                    email: response.data.email,
                    employment: response.data.employment,
                    role: response.data.role,
                    batch: response.data.batch,
                    course: response.data.course,
                    password: response.data.password,

                });
                setSubmitted(true);
                onSubmitClickHnd(response.data)
                retrieveUsers();
                console.log(response.data);
            })
            .catch((e: Error) => {
                console.log(e);
            });
    };

    const newUser = () => {
        setFormData(initialState);
        setSubmitted(false);

    };

    return (
        <div className={`fixed left-0 top-0 z-999999 flex h-full min-h-screen w-full items-center justify-center bg-black/90 px-4 py-5 ${open ? "visible bg-black/20" : "invisible"}`}>
            <div className="md:px-17.5 w-full max-w-142.5 rounded-lg bg-white px-8 py-12  dark:bg-boxdark md:py-15">
                <h3 className="pb-2 text-xl font-bold text-black dark:text-white sm:text-2xl ">User Registration</h3>
                <span className="mx-auto mb-6 inline-block h-1 w-22.5 rounded bg-primary"></span>
                {submitted ? (
                    <div>
                        <h4>You have posted job successfully!</h4>
                        <button className="block w-full rounded-full border border-stroke  bg-zinc-800 p-3 text-center font-medium text-white transition hover:bg-opacity-90 active:bg-opacity-80" onClick={newUser}>
                            Add New
                        </button>
                    </div>
                ) : (
                    <>
                        <form>
                            <div className="mb-4">
                                <label className="mb-2.5 block font-medium text-black dark:text-white">
                                    Name
                                </label>
                                <div className="relative">
                                    <input
                                        onChange={handleInputChange}
                                        name='name'
                                        id='name'
                                        value={formData.name}
                                        type="text"
                                        placeholder="Enter your email"
                                        className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                    />
                                </div>
                            </div>
                            <div className="mb-6">
                                <label className="mb-2.5 block font-medium text-black dark:text-white">
                                    Emails
                                </label>
                                <div className="relative">
                                    <input
                                        onChange={handleInputChange}
                                        name='email'
                                        id='email'
                                        value={formData.email}
                                        type="email"
                                        placeholder="Enter your password"
                                        className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                    />
                                </div>
                            </div>
                            <div className="mb-6">
                                <label className="mb-2.5 block font-medium text-black dark:text-white">
                                    Course
                                </label>
                                <div className="relative">
                                    <input
                                        onChange={handleInputChange}
                                        name='course'
                                        id='course'
                                        value={formData.course}
                                        type="text"
                                        placeholder="Enter your password"
                                        className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                    />
                                </div>
                            </div>
                            <div className="mb-6">
                                <label className="mb-2.5 block font-medium text-black dark:text-white">
                                    Batch
                                </label>
                                <div className="relative">
                                    <input
                                        onChange={handleInputChange}
                                        name='batch'
                                        id='batch'
                                        value={formData.batch}

                                        type="number"
                                        placeholder="Enter Year Graduated"
                                        className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                    />
                                </div>
                            </div>
                            <div className="mb-6">
                                <SelectEmployment selectedEmployment = {employmentStatus} onEmploymentChange = {setEmploymentStatus}/>
                            </div>
                            <div className="mb-6">
                                <SelectRole selectedRole = {roleType} onRoleChange = {setRoleType} />
                            </div>
                        </form>
                        <div className="-mx-3 flex flex-wrap gap-y-4"><div className="2xsm:w-1/2 w-full px-3">
                            <button className="block w-full rounded-full border border-stroke bg-gray p-3 text-center font-medium text-black transition hover:border-meta-1 hover:bg-meta-1 hover:text-white dark:border-strokedark dark:bg-meta-4 dark:text-white dark:hover:border-meta-1 dark:hover:bg-meta-1" onClick={onClose}>Cancel</button>
                        </div>
                            <div className="2xsm:w-1/2 w-full px-3">
                                <button onClick={saveUser} className="block w-full rounded-full border border-stroke  bg-zinc-800 p-3 text-center font-medium text-white transition hover:bg-opacity-90 active:bg-opacity-80">
                                    Create</button>
                            </div>
                        </div>
                    </>
                )}

            </div>
        </div>

    )
}

export default Modal