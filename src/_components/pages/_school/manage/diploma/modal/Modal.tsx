import React from 'react'

type propTypes = {
    open: boolean;
    onClose: () => void;
}

const Modal: React.FC<propTypes> = ({ open, onClose }) => {
    return (
        <div className={`fixed left-0 top-0 z-999999 flex h-full min-h-screen w-full items-center justify-center bg-black/90 px-4 py-5 ${open ? "visible bg-black/20" : "invisible"}`}>
            <div className="md:px-17.5 w-full max-w-142.5 rounded-lg bg-white px-8 py-12  dark:bg-boxdark md:py-15">
                <h3 className="pb-2 text-xl font-bold text-black dark:text-white sm:text-2xl ">Upload Diploma</h3>
                <span className="mx-auto mb-6 inline-block h-1 w-22.5 rounded bg-primary"></span>
                <form>
                    <div className="mb-4">
                        <label className="mb-2.5 block font-medium text-black dark:text-white">
                            Name
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search name..."
                                className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            />
                        </div>
                    </div>
                    <div className="mb-2">
                        <label className="mb-2.5 block font-medium text-black dark:text-white">
                            Email: <strong className='m-4'>hello@gmail.com</strong>
                        </label>

                    </div>
                    <div className="mb-2">
                        <label className="mb-2.5 block font-medium text-black dark:text-white">
                            Course: <strong className='m-4'>BSIT</strong>
                        </label>

                    </div>
                    <div className="mb-6">
                        <label className="mb-2.5 block font-medium text-black dark:text-white">
                            Year Graduated: <strong className='m-4'> 2019</strong>
                        </label>

                    </div>
                    <div className='mb-6'>
                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                            Attach Diploma
                        </label>
                        <input type="file" className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent font-normal outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:px-5 file:py-3 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary" />
                    </div>
                </form>
                <div className="-mx-3 flex flex-wrap gap-y-4"><div className="2xsm:w-1/2 w-full px-3">
                    <button className="block w-full rounded-full border border-stroke bg-gray p-3 text-center font-medium text-black transition hover:border-meta-1 hover:bg-meta-1 hover:text-white dark:border-strokedark dark:bg-meta-4 dark:text-white dark:hover:border-meta-1 dark:hover:bg-meta-1" onClick={onClose}>Cancel</button>
                </div>
                    <div className="2xsm:w-1/2 w-full px-3">
                        <button className="block w-full rounded-full border border-stroke  bg-zinc-800 p-3 text-center font-medium text-white transition hover:bg-opacity-90 active:bg-opacity-80">
                            Create</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Modal