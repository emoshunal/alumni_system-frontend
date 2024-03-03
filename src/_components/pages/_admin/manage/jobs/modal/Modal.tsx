import React, { useState } from 'react'
import IJob from '../../../../../../_types/IJob';
import JobService from '../../../../../../_services/JobService';

type propTypes = {
    open: boolean;
    onClose: () => void;
    onSubmitClickHnd: (data: IJob) => void;
    retrieveJob: () => void;
}

const Modal: React.FC<propTypes> = ({ open, onClose, onSubmitClickHnd, retrieveJob }) => {

    const initialState = {
        title: "",
        description: "",
        company: "",
        location: "",
    }

    const [formData, setFormData] = useState<IJob>(initialState);
    const [submitted, setSubmitted] = useState<boolean>(false);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    const saveJob = () => {
        var data = {
            title: formData.title,
            description: formData.description,
            company: formData.company,
            location: formData.location,
        }
        console.log(data);
        JobService.create(data)
            .then((response: any) => {
                setFormData({
                    title: response.data.title,
                    description: response.data.description,
                    company: response.data.company,
                    location: response.data.location,
                });
                setSubmitted(true);
                onSubmitClickHnd(response.data);
                retrieveJob();
                console.log(response.data);
            });

      
    }
    const newJob = () => {
        setFormData(initialState);
        setSubmitted(false);
    }
    return (
        <div className={`fixed left-0 top-0 z-999999 flex h-full min-h-screen w-full items-center justify-center bg-black/90 px-4 py-5 ${open ? "visible bg-black/20" : "invisible"}`}>
            <div className="md:px-17.5 w-full max-w-142.5 rounded-lg bg-white px-8 py-12  dark:bg-boxdark md:py-15">
                <h3 className="pb-2 text-xl font-bold text-black dark:text-white sm:text-2xl ">Post a Job</h3>
                <span className="mx-auto mb-6 inline-block h-1 w-22.5 rounded bg-primary"></span>

                {submitted ? (
                    <div>
                        <h4>You submitted successfully!</h4>
                        <button className="block w-full rounded-full border border-stroke  bg-zinc-800 p-3 text-center font-medium text-white transition hover:bg-opacity-90 active:bg-opacity-80" onClick={newJob}>
                            Add New
                        </button>
                    </div>
                ) : (
                    <>
                        <form>
                            <div className="mb-4">
                                <label className="mb-2.5 block font-medium text-black dark:text-white">
                                    Company Name
                                </label>
                                <div className="relative">
                                    <input
                                        onChange={handleInputChange}
                                        name="company"
                                        value={formData.company}
                                        type="text"
                                        placeholder="Enter Company Name"
                                        className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                    />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="mb-2.5 block font-medium text-black dark:text-white">
                                    Job Title
                                </label>
                                <div className="relative">
                                    <input
                                        name='title'
                                        onChange={handleInputChange}
                                        value={formData.title}
                                        type="text"
                                        placeholder="Enter Job Title"
                                        className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                    />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="mb-2.5 block font-medium text-black dark:text-white">
                                    Location
                                </label>
                                <div className="relative">
                                    <input
                                        name='location'
                                        onChange={handleInputChange}
                                        value={formData.location}
                                        type="text"
                                        placeholder="Enter job title or position"
                                        className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                    />
                                </div>
                            </div>

                            <div className="mb-6">
                                <label className="mb-2.5 block font-medium text-black dark:text-white">
                                    Description
                                </label>
                                <div className="relative">
                                    <textarea
                                    onChange={handleInputChange}
                                    name="description"
                                    value={formData.description}
                                    rows={8} placeholder="Type your message" className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"></textarea>
                                </div>
                            </div>
                        </form>
                        <div className="-mx-3 flex flex-wrap gap-y-4"><div className="2xsm:w-1/2 w-full px-3">
                            <button className="block w-full rounded-full border border-stroke bg-gray p-3 text-center font-medium text-black transition hover:border-meta-1 hover:bg-meta-1 hover:text-white dark:border-strokedark dark:bg-meta-4 dark:text-white dark:hover:border-meta-1 dark:hover:bg-meta-1" onClick={onClose}>Cancel</button>
                        </div>
                            <div className="2xsm:w-1/2 w-full px-3">
                                <button
                                onClick={saveJob}
                                className="block w-full rounded-full border border-stroke  bg-zinc-800 p-3 text-center font-medium text-white transition hover:bg-opacity-90 active:bg-opacity-80">
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