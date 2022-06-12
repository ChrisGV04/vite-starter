import axios from 'axios';
import { API_DOMAIN } from '~/env';

export function useAxios() {
  const axiosInstance = axios.create({
    baseURL: API_DOMAIN,
    withCredentials: true,
  });

  return axiosInstance;
}
