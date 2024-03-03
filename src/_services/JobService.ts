import http from "../_http/http-common";
import IJob from "../_types/IJob";

const create = (data: IJob) =>{
    return http.post<IJob>("/job", data);
}

const getJob = () => {
    return http.get<Array<IJob>>(`/job/`);
}

const JobService = {
    create,
    getJob
}


export default JobService;

