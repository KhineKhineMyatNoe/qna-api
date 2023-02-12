import useCreateQuestion from "@/hooks/useCreateQuestion";
import DefaultLayout from "@/layouts/DefaultLayout";
import { useRouter } from "next/router";

interface CreateQuestionProps {}

const CreateQuestion: React.FC<CreateQuestionProps> = () => {
  const createQuestion = useCreateQuestion();
  const router = useRouter();
  return (
    <DefaultLayout>
      <form
        onSubmit={createQuestion.handleSubmit}
        className="flex flex-col gap-5"
      >
        <h3 className="text-2xl font-bold mb-5">Create Question</h3>
        <div className="flex flex-col">
          <label>Question</label>
          <input
            name="question"
            className="bg-gray-100 outline-none py-2 px-3"
            type="text"
          />
        </div>
        <div className="flex flex-col">
          <label>Choices</label>
          <textarea
            name="choices"
            className="bg-gray-100 outline-none py-2 px-3"
          />
        </div>
        <div className="flex flex-col">
          <label>Answer</label>
          <input
            name="answer"
            className="bg-gray-100 outline-none py-2 px-3"
            type="text"
          />
        </div>
        <button className="bg-blue-500 text-white py-2 rounded">Save</button>
        <button
          type="button"
          className="bg-gray-500 text-white py-2 rounded"
          onClick={() => router.push("/")}
        >
          Back
        </button>
      </form>
    </DefaultLayout>
  );
};

export default CreateQuestion;
