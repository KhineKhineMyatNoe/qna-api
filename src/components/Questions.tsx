import { QuestionObj, ResultsObj } from "@/apis/question";
import useCreateResult from "@/hooks/useCreateResult";
import { useCallback, useEffect, useState } from "react";

interface QuestionsProps {
  data: QuestionObj[];
}

interface ResultObj extends QuestionObj {
  user_answer: string | null;
}

const Questions: React.FC<QuestionsProps> = ({ data }) => {
  const [result, setResult] = useState<ResultObj[] | []>([]);

  
  
  const resetData = useCallback(() => {
    const resultData = data.map((item) => ({ ...item, user_answer: null }));
    console.log({resultData});
    setResult([...resultData]);
  }, [result, setResult]);

  const { handleClick } = useCreateResult(resetData);

  const handleUserClick = (id: number, user_answer: string) => {
    const updateResult = result.map((item) => {
      if (item.id == id) {
        return { ...item, user_answer };
      }
      return { ...item };
    });
    console.log({ updateResult });
    setResult([...updateResult]);
  };

  useEffect(() => {
    if (result.length == 0 && data.length > 0) {
      const resultData = data.map((item) => ({ ...item, user_answer: null }));
      setResult(resultData);
    }
  }, [data]);
  return (
    <>
      {result.map((item) => (
        <div className="bg-gray-100 p-3 rounded shadow mb-5" key={item.id}>
          <h3>{item.attributes.question}</h3>
          {Object.entries(item.attributes.choices).map((choice) => (
            <div
              className="flex gap-2 items-center cursor-pointer group"
              key={choice[0]}
              onClick={() => {
                handleUserClick(item.id, choice[0]);
              }}
            >
              <div
                className={[
                  "aspect-square rounded w-3 h-3 group-hover:bg-blue-300",
                  choice[0] == item.user_answer ? "bg-blue-300" : "bg-gray-400",
                ].join(" ")}
              ></div>
              {choice[1] as string}
            </div>
          ))}
        </div>
      ))}

      <button
        type="button"
        className="bg-blue-500 text-white px-5 py-1 rounded"
        onClick={() => {
          let data: ResultsObj = {
            user: 1,
            answer: result,
          };

          handleClick({ ...data });
        }}
      >
        Submit the answer
      </button>
    </>
  );
};

export default Questions;
