import { QueryFunctionContext } from "@tanstack/react-query";
import { baseURL } from "../lib/baseURL"

export interface CharacterResObj
{
    id: number;
    name:  string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: {
      name: string;
      url: string;
    };
    location: {
      name: string;
      url: string;
    }
    image: string;
    episode: Array<string> | [];
    url: string;
    created: string;
  }
  
  interface CharacterProps{
    name: string;
  }

  export const characterApi = async (props:QueryFunctionContext<[string, CharacterProps]>) => {
    console.log(props)
    const [key, param] =props.queryKey;
    console.log(param.name)
    let error:any = null;
    try {
       const response = await baseURL.get("/character/?page=19");
       if(response.status == 200) {
        return response.data.results as Array<CharacterResObj>
       }
       error = {
            status: null,
            error: "unknown",
        }
        
    } catch (error) {
      
    }

    if(error) {
        throw error;
    } else {
        throw {
            status:null,
            error: "unknown",
        }
    }
  }

