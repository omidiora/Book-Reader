import axios from 'axios';

const API = 'http://ec2-3-129-194-135.us-east-2.compute.amazonaws.com';

export const instance = axios.create({
  withCredentials: true,
  baseURL: API,
});
