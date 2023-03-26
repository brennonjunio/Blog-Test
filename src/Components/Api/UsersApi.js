import axios from 'axios';
import React from 'react'

const UsersApi = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/users"  
});

export default UsersApi;