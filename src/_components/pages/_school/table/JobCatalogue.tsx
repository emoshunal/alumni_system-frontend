import { JobDetails } from "../../../types/JobDetails";



const JobData: JobDetails[] = [
  {
    company: 'ACE',
    email: 'hrace@gmail.com',
    title: 'John Doe',
    description: 'lorem ipsum dolor sit am',
    status: 'Online',
    logo: require("../../../../_assets/images/user/user-02.png")
  },
  {
    company: 'ASUS',
    email: 'asus@email.com',
    title: 'John Tucker',
    description: 'lorem ipsum dolor sit am',
    status: 'Unverified',
    logo: require("../../../../_assets/images/user/user-03.png")
  },
  {
    company: 'Bitstop',
    email: 'bistop@gmail.com',
    title: 'Juan Dela Cruz',
    description: 'lorem ipsum dolor sit am',
    status: 'Offline',
    logo: require("../../../../_assets/images/user/user-04.png")
  },
  {
    company: 'Magic',
    email: 'hrmagic@yahoo.com',
    title: 'James Potter',
    description: 'lorem ipsum dolor sit am',
    status: 'Online',
    logo: require("../../../../_assets/images/user/user-05.png")
  },
];

const JobCatalogue = () => {

   const handleClick = (event: React.MouseEvent) =>{
    console.log('Hello');
   }
  return (

    <div className="grid grid-cols-1 gap-7.5 sm:grid-cols-2 xl:grid-cols-3">
      {JobData.map((packageItem, key) => (
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark" key={key}>
          
          <button className="md:m-2 sm:m-2 hover:text-slate-700 active:text-slate-400" onClick={handleClick}>
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
              <img src={packageItem.logo} alt="User" />
            </div>
            <div>
              <h4 className="font-medium text-black dark:text-white">
                {packageItem.company}
              </h4>
              <p className="text-xs font-medium">{packageItem.email}</p>
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
  );
};

export default JobCatalogue;
