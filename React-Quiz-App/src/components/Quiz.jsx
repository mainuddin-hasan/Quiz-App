import { useState } from 'react';
import { QuizData } from './QuizData';
import FinalResult from './FinalResult';

function Quiz() {

    const [presentQuestion, setPresentQuestion] = useState(0);
    const [point, setPoint] = useState(0);
    const [clickOp, setClickOp] = useState(0);
    const [showPoint, setShowPoint] = useState(false);

    const nextQues = () => {
        updatePoint();

        if (presentQuestion < QuizData.length - 1) {
            setPresentQuestion(presentQuestion + 1);
            setClickOp(0);
        }
        else {
            setShowPoint(true);
        }

    }
    const updatePoint = () => {
        if (clickOp === QuizData[presentQuestion].answer) {
            setPoint(point + 1);
        }
    }

    const resetQuiz =() =>{
        setShowPoint(false);
        setPresentQuestion(0);
        setPoint(0);
        setClickOp(0);
    }

    return (
        <div>
            <p className="heading-txt">Simple Quiz App</p>
            <div className="quiz-container">
              {showPoint ? (
                <FinalResult point={point} totalPoint={QuizData.length} reStart={resetQuiz}/>
              ) : (
              <>
                <div className="question">
                    <span id="ques-number">{presentQuestion + 1}.</span>
                    <span id="ques-txt">{QuizData[presentQuestion].question}</span>
                </div>
                <div className="option-container">
                    {QuizData[presentQuestion].options.map((option, i) => {
                        return (
                            <button
                                className={`option-btn ${
                                    clickOp == i + 1 ? "checked" : null
                                }`}
          
                                key={i}
                                onClick={() => setClickOp(i + 1)}
                            >
                                {option}
                            </button>
                        )
                    })}
                </div>
                <input type="button" value="next" id="next-btn" 
                 disabled={!clickOp}
                 onClick={nextQues} />
              </>
              )}
            </div>
        </div>
    );
}

export default Quiz;