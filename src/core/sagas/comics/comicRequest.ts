import axios from 'axios';

export const requestGetComics = () =>{
  return axios.request({
    method: 'get',
    url: "http://localhost:5000/comics"
  })
}