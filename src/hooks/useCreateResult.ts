import { QueryClient, useMutation, useQueryClient } from "@tanstack/react-query";
import { ResultsObj, createResultApi } from "../apis/question";



const useCreateResult = () => {
    //const queryClient = useQueryClient();
    const useResultMutation = useMutation({
        mutationFn: createResultApi,
        onSuccess: (result, varaiables) => {
            console.log({
                result,
                varaiables
            })
        //    queryClient.invalidateQueries({queryKey: ["questions"]});
            console.log("Results created successfully")
        }, 
        onError: (error:any) => {
            console.log(error);
        }
    })

    const handleClick = (data:ResultsObj) => {
        useResultMutation.mutate({
           ...data
        })
    }
  

    return {
        handleClick
    }
}
 
export default useCreateResult;