import Questions from "./Questions";
import {useContext, useReducer} from "react";
import {QuizContext} from "../contexts/quiz";

const Quiz = () => {
    const [quizState, dispatch]= useContext(QuizContext);
    return (
        <div className="quiz">
            {quizState.showResults && (
                <div className="results">
                    <div className="congratulations">Congratulations</div>
                    <div className="results-info">
                        <div>You have complete the quiz!</div>
                        <div>You've got {quizState.correctAnswerCount} of {quizState.questions.length}</div>
                        <div className="next-button" onClick={()=> dispatch({type: "RESTART"})}>Restart </div>
                    </div>
                </div>
            )}
            {!quizState.showResults  && (
                <div>
                    <div className="score">Question {quizState.currentQuestionIndex + 1}/{quizState.questions.length}</div>
                    <Questions />
                    <div className="next-button"
                        onClick={() => dispatch({ type: 'NEXT_QUESTION' })}
                    >
                        Next question
                    </div>
                </div>)}
            </div>)
};

export default Quiz;