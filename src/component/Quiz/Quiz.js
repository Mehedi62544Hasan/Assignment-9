import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';
import './Quiz.css'

const Quiz = () => {
    const quiz = useLoaderData();
    const questions = quiz.data.questions
    return (
        <div>
            <div>
            {
                questions.map(question => <Question
                    key={question.id}
                    questions={question}
                ></Question>)
             }
            </div>
            <div>
                result
            </div>
        </div>
    );
};

export default Quiz;