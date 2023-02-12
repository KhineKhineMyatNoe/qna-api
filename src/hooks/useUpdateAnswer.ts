import { QueryClient, useMutation, useQueryClient } from "@tanstack/react-query";
import { MouseEventHandler } from "react";
import { updateAnswerApi, UpdateAnswerProps } from "../apis/question";



interface handleUpdateClick{
    id: string|number;
    answer: string;
}

const useUpdateAnswer = () => {
    const queryClient = useQueryClient();
    const updateAnswerMutation = useMutation({
        mutationFn: updateAnswerApi,
        onSuccess: (result, varaiables) => {
            console.log({
                result,
                varaiables
            })
            queryClient.invalidateQueries({queryKey: ["questions"]});
            // alert("Question created successfully")
        },
        onError: (error:any) => {
            console.log(error);
        }
    })

    const handleClick = ({id, answer}:handleUpdateClick) => {
        updateAnswerMutation.mutate({
            id,
            data:{
                answer
            }
        })
    }
    // const onclickHandler:MouseEventHandler<HTMLDivElement> = (data: UpdateAnswerProps) => {

    //     updateAnswerMutation.mutate({
    //         ...data
    //     })
    // }

    return {
        handleClick
    }
}
 
export default useUpdateAnswer;