import { defaultError } from "../helpers/errors";
import { catBaseURL } from "../lib/baseURL";

export  interface TodosResObj {
    Id: number;
    Name:string;
    hasDone: 0 | 1;
}
export const todosApi = async () => {
    let error:any = null;
    try {
        const response = await catBaseURL.get("/API/Wallet/GetAllToDO");
        if(response.status == 200) {
            return response.data as Array<TodosResObj>
        } 
        error = defaultError;
    } catch (error) {
        console.log(error);
        error = defaultError;
    }
    if(error) {
        throw error;
    } else {
        throw defaultError;
    }
}