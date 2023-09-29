import axios from "axios";
const ApiInsurance = axios.create({
    baseURL:    'http://192.168.0.10:3000/api',
    headers:    {
        'Content-Type':'application/json',
    }
});

export { ApiInsurance };