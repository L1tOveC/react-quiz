import Answers from "./Answers";

const Questions = ({questions}) => {
    console.log('Check_props', questions);
    return (
        <div>
            <div className="question">Text of the question</div>
            <div className="answers">
                <Answers />
                <Answers />
                <Answers />
                <Answers />
            </div>
        </div>)
};

export default Questions;