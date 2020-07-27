import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getQuizDetail } from './Services/quiz_service';
import { QuizType } from './Type/quiz_type';
import QuestionCard from './Component/QuestionCard';

function App() {

  let [quiz, setQuiz] = useState<QuizType[]>([]);
  let [currentQuestion, setQuestion] = useState(0);
  let [score, setScore] = useState(0);
  let [showResult, setShowResult] = useState(false)

  useEffect(() => {
    async function fetchData() {
      const questions: QuizType[] = await getQuizDetail(5, 'easy')
      setQuiz(questions)
      // console.log(questions)
    }
    fetchData()
  }, [])

  const handleSubmit = (e: React.FormEvent<EventTarget>, userAns: string) => {
    e.preventDefault();

    // console.log(userAns);
    const currentStep: QuizType = quiz[currentQuestion];

    if (userAns === currentStep.correct_answer) {
      setScore(++score)
    }
    if (currentQuestion !== quiz.length - 1) {
      setQuestion(++currentQuestion)
    }
    else {
      setShowResult(true)
      setQuestion(0)
    }
  }

  if (!quiz.length) {
    return (
      <div className="showResult">
        <h2 className="resultHeading">Loading </h2>
      </div>

    )
  }

  if (showResult) {
    return (
      <div className="showResult">
        <h2 className="resultHeading">Result</h2>
        <h6 className="resultHeading1">Your score is  <b>{score}</b> out of  <b>{quiz.length}</b></h6>
      </div>

    )
  }

  return (
    <div>
      <div className='row justify-content-center mt-5'>
        <h1 className="heading">Quiz App</h1>
      </div>
      <div>
        <QuestionCard
          options={quiz[currentQuestion].option}
          question={quiz[currentQuestion].question}
          callback={handleSubmit}
        />
      </div>
    </div>
  );
}

export default App;
