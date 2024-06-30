import { AllApis } from '../../config/Allapis';
import instanceBaseurl from './../../config/BaseUrl';

export async function SubscribeUser(datas){

    try {
        const response=await instanceBaseurl.post(`${AllApis?.subscribe_api}`,datas);
       if(response)
        {
            return response?.data;
        }
    } catch (error) {
            return {message:error?.response?.data?.message,status:error?.status};
        
    }
}


export async function getAllSubscribe(){

    try {
        const response=await instanceBaseurl.get(`${AllApis?.subscribe_get_all}`);
       if(response)
        {
            return{
                status:response?.data?.status,
                data:response?.data?.data,
                message:response?.data?.message
            }
        }
    } catch (error) {
            return {message:error?.response?.data?.message,status:error?.status};
        
    }
}