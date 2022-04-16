import axios from 'axios'

axios.defaults.baseURL ='http://localhost:8080/';

/*const username = localStorage.getItem('username');
const password = localStorage.getItem('password');
const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64');*/

//axios.defaults.headers.common['Authorization'] = 'Basic '+Buffer.from(`${localStorage.getItem('username')}:${localStorage.getItem('password')}`, 'utf8').toString('base64')