import { useEffect, useState } from "react";
import IJob from "../../../../../../_types/IJob";
import { useNavigate } from "react-router-dom";
import JobService from "../../../../../../_services/JobService";
import logoImage from "../../../../../../_assets/images/user/user-04.png"
import Modal from '../modal/Modal'

const JobCatalogue: React.FC = () => {

  const [job, setJob] = useState<IJob[]>([]);
  const [open, setOpen] = useState<boolean>(false)

  const navigate = useNavigate();

  useEffect(() => {
    retrieveJob();
  }, []);

  const retrieveJob = () => {
    JobService.getJob()
      .then((response: any) => {
        setJob(response.data);
        console.log(response.data);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }
  return (
    <>
      <button className="w-32 cursor-pointer rounded-full  bg-zinc-800 p-2 text-white transition hover:bg-opacity-90 my-3 active:bg-opacity-80"
        onClick={() => setOpen(true)}> Create Post</button>
      <div className="grid grid-cols-1 gap-7.5 sm:grid-cols-2 xl:grid-cols-3">
        {job.map((packageItem, key) => (
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark" key={key}>
            <button className="md:m-2 sm:m-2 hover:text-slate-700 active:text-slate-400">
              <svg
                fill="currentColor"
                viewBox="0 0 16 16"
                height="1.5em"
                width="1.5em"
              >
                <path d="M15.502 1.94a.5.5 0 010 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 01.707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 00-.121.196l-.805 2.414a.25.25 0 00.316.316l2.414-.805a.5.5 0 00.196-.12l6.813-6.814z" />
                <path
                  fillRule="evenodd"
                  d="M1 13.5A1.5 1.5 0 002.5 15h11a1.5 1.5 0 001.5-1.5v-6a.5.5 0 00-1 0v6a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5H9a.5.5 0 000-1H2.5A1.5 1.5 0 001 2.5v11z"
                />
              </svg>
            </button>

            <div className="flex items-center gap-3 px-6 py-5">
              <div className="h-10 w-10 rounded-full">
                <img src={logoImage} alt="User" />
              </div>
              <div>
                <h4 className="font-medium text-black dark:text-white">
                  {packageItem.company}
                </h4>
                <p className="text-xs font-medium">{packageItem.location}</p>
              </div>
            </div>
            <div className="p-6">
              <h4 className="mb-3 text-xl font-semibold text-black dark:text-white">
                <a href="#">{packageItem.title}</a>
              </h4>
              <p className="font-medium">
                {packageItem.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <Modal open={open} onClose={() => setOpen(false)} onSubmitClickHnd={(data: IJob) => console.log(data)} retrieveJob={retrieveJob}/>
    </>
  );
};
export default JobCatalogue;
