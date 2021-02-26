import React from 'react';
// Types
import { AnswerObject } from '../App';
// Styles
import { Wrapper, ButtonWrapper } from './QuestionCard.styles';

type Props = {
  question: string;
  answers: string[];
  callBack: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswers: AnswerObject | undefined;
  questionNumber: number;
  totalQuestion: number;
}

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callBack,
  userAnswers,
  questionNumber,
  totalQuestion
}) => {
  return (
    <Wrapper>
      <p className='number'>
        Question: {questionNumber} / {totalQuestion}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question}} />
      <div>
        {answers.map((answer) => (
          <ButtonWrapper
            key={answer}
            correct={userAnswers?.correctAnswer === answer}
            userClicked={userAnswers?.answer === answer}
          >
            <button disabled={!!userAnswers} value={answer} onClick={callBack}>
              <span dangerouslySetInnerHTML={{ __html: answer}} />
            </button>
          </ButtonWrapper>
        ))}
      </div>
    </Wrapper>
  );
};

export default QuestionCard;