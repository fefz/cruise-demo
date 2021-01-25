import axios from 'axios';

export const getAgentList=()=>{
    return new Promise((resolve, reject) => {
        axios.get('http://localhost:3001/agents/')
        .then((res)=>{
            resolve(res.data);
        })
        .catch((err)=>{
            reject(err);
        })
    });
}
