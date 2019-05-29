export const x:number = 10


import axios from 'axios'
const BASE_URL:string = 'http://micky.com/api';

export const fetch = async (method: string, path:Array<string>, data: object= {}, withCredentials:boolean=true, params:object={},) => {
  const URL = `${BASE_URL}/${path.join('/')}`;
  return axios({
    method: method,
    url: URL,
    data: data,
    withCredentials: withCredentials,
    params: params,
  })
  .then((response) =>{
    return {
      data: response.data,
      status: response.status
    }
  })
  .catch((err) => {
    throw err
  })
}


const AI_URL:string = 'http://micky.com/ai';

export const fetchAI = async (method: string, path:Array<string>, data: object= {}, withCredentials:boolean=true, params:object={},) => {
  const URL = `${AI_URL}/${path.join('/')}`;
  return axios({
    method: method,
    url: URL,
    data: data,
    withCredentials: withCredentials,
    params: params,
  })
  .then((response) =>{
    return {
      data: response.data,
      status: response.status
    }
  })
  .catch((err) => {
    throw err
  })
}