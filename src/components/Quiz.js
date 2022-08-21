import Questions from "./Questions";
import {useState} from "react";

const Quiz = () => {
    const [CurrentQuestionIndex , setCurrentQuestionIndex] = useState(0);
    console.log('result', CurrentQuestionIndex);
    return (
        <div className="quiz">
            {CurrentQuestionIndex}
            <div>
                <div className="score">Question 1/8</div>
                <Questions />
                <div className="next-button"
                     onClick={() => setCurrentQuestionIndex(CurrentQuestionIndex +1)}>
                    Next question
                </div>
            </div>
        </div>);
};

export default Quiz;