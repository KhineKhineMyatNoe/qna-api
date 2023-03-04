import { useMutation } from "@tanstack/react-query";
import { FormEventHandler } from "react";
import { createQuestionApi, QuestionCreateProps } from "../api-backend/apis/question";

interface useCreateQuestionProps {
    
}
 
const useCreateQuestion = () => {
    const createQuestionMutation = useMutation({
        mutationFn: createQuestionApi,
        onSuccess: (result, varaiables) => {
            console.log({
                result,
                varaiables
            })
            alert("Question created successfully")
        },
        onError: (error:any) => {
            console.log(error);
        }
    })
    

    const handleSubmit:FormEventHandler<HTMLFormElement>  = (e) => {
        e.preventDefault();
        const target = e.target as any;
        const data:QuestionCreateProps = {
            question: target.question.value,
            choices: JSON.parse(target.choices.value),
            answer: target.answer.value,
        }

        createQuestionMutation.mutate({
            ...data
        })
    }

    return {
        handleSubmit
    }
}
 
export default useCreateQuestion;