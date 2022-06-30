import axios from "axios";

export const api = axios.create({ baseURL: 'http://localhost:5000' })

const env = process.env.NODE_ENV

if(env == "development"){
    api.interceptors.request.use(config=>{
        console.log(config)

        return config
    })
}
   