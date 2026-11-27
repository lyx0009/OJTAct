import axiosInstance from '../../helpers/axiosInstance';

export const loginAPI = async (data) => {
    const res = await axiosInstance.post('/login', data);
    return res.data;
}    