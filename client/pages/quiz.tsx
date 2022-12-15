import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import GET_QUESTIONS from "../queries/questionQueries";
import { client } from "../pages/_app";

interface Question {
  __typename: string;
  question: string;
  answers: string[];
  correct: number;
}

const Quiz = ({ questions }: { questions: Question[] }) => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);

  if (!questions) {
    return (
      <div className="center">
        <h1>Loading...</h1>
      </div>
    );
  }

  return <h1>{questions[currentQuestion].question}</h1>;
};

export async function getStaticProps() {
  const { data } = await client.query({ query: GET_QUESTIONS });

  return {
    props: {
      questions: data.questions,
    },
  };
}

export default Quiz;
