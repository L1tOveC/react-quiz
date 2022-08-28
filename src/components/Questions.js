import Answers from "./Answers";
import {useContext} from "react";
import {QuizContext} from "../contexts/quiz";

const Questions = () => {
    const [quizState, dispatch]= useContext(QuizContext);
    console.log('Question', quizState);
    const currentQuestion = quizState.questions[quizState.currentQuestionIndex]
    return (
        <div>
            <div className="question">{currentQuestion.question}</div>
            <div className="answers">
                <Answers />
                <Answers />
                <Answers />
                <Answers />
            </div>
        </div>)
};

export default Questions;