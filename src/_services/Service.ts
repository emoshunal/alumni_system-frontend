import http from "../_http/http-common";
import  IUsers  from "../_types/IUsers";
import IUserRegisters from "../_types/IUserRegisters";

const create = (data: IUsers) => {
    return http.post<IUsers>("/users", data);
}

const getUserId = (id: any) => {
    return http.get<IUsers>(`/users/${id}`);
}

const updateUser = (id: any, data: IUsers) => {
    return http.put<any>(`/users/${id}`, data);

}

const deleteUser = (id: any) => {
    return http.delete<any>(`/users/${id}`);
}

const getUsers = () => { 
    return http.get<Array<IUsers>>(`/users/`);
}
const getAlumniUsers = () => {
    return http.get<Array<IUsers>>(`/users/alumni/`);
}

const registerUser = (data: IUserRegisters) => {
    return http.post<IUserRegisters>("/create", data);
}
const UserService = {
    create,
    getUserId,
    updateUser,
    deleteUser,
    getUsers,
    getAlumniUsers,
    registerUser,
};


export default UserService;