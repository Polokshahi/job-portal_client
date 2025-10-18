import axios from 'axios';
import { useContext, useEffect } from 'react';
import AuthContext from '../Context/AuthContext';
import auth from '../Firebase/Firebase.int';
import { useNavigate } from 'react-router-dom';




const axiosInstance = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true
});

const useAxiosSecure = () => {
    const {LogOut} = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(() => {
        axiosInstance.interceptors.response.use(
            (response) => response,
            (error) => {
                if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                    LogOut(auth);
                    navigate('/login');
                }
                return Promise.reject(error);
            }
        );



    }
        , []);
    return axiosInstance;
};

export default useAxiosSecure;