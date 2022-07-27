import axios from 'axios';
import { HttpRequest } from '@/api/http/httpRequest';

const baseURL =
  process.env.REACT_APP_MODE === 'DEV'
    ? 'http://localhost:8000'
    : 'https://cloud-worker-sheep.herokuapp.com';

const axiosInstance = axios.create({
  baseURL,
});

export const apiRequest = new HttpRequest(axiosInstance);
