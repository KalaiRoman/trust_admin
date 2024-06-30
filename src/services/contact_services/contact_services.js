import { AllApis } from '../../config/Allapis';
import { ToastError } from '../../config/ToastModalMessage';
import instanceBaseurl from './../../config/BaseUrl';

export async function createContact(datas){

    try {
        const response=await instanceBaseurl.post(`${AllApis?.contact_api}`,datas);
       if(response)
        {
            return response?.data;
        }
       
    } catch (error) {
        console.log(error);
           
    }
}

// get all contacts


export async function getContactAllusers(datas){

    try {
        const response=await instanceBaseurl.get(`${AllApis?.contact_get_all}`);
       if(response)
        {
            return{
                status:response?.data?.status,
                data:response?.data?.data,
                message:response?.data?.message
            }
        }
       
    } catch (error) {
        console.log(error);
           
    }
}