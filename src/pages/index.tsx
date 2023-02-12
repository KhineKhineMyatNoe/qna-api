import { createContext, Dispatch, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { questionApi } from "@/apis/question";
import useUpdateAnswer from "@/hooks/useUpdateAnswer";
import DefaultLayout from "@/layouts/DefaultLayout";
import { useRouter } from "next/router";
import Questions from "@/components/Questions";

export default function Home() {
  const questionQuery = useQuery({
    queryKey: ["questions"],
    queryFn: questionApi,
    retry: 1,
    refetchOnMount: false,
  });
  const updateAnswer = useUpdateAnswer();
  const router = useRouter();

  return (
    <>
      <DefaultLayout>
        <>
          <div className="w-full flex justify-end">
            <button
              className="bg-blue-500 text-white py-1 px-5 mb-5"
              type="button"
              onClick={() => router.push("/create-question")}
            >
              Create
            </button>
          </div>

          {questionQuery.isLoading && <p>Loading...</p>}
          {questionQuery.isError && <p>Error</p>}
          {questionQuery.data && <Questions data={questionQuery.data} />}
        </>
      </DefaultLayout>
    </>
  );
}
