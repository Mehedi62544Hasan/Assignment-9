import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';
import './Quiz.css'

const Quiz = () => {
    const quiz = useLoaderData();
    const questions = quiz.data.questions
    // console.log(quiz.data)
    return (
        <div>
                <div className='flex justify-around items-center question-container bg-fuchsia-200 lg:mx-52 my-14'>
                    <p className='text-5xl font-bold text-fuchsia-500'>{quiz.data.name}</p>
                    <img className='w-20 rounded-full' src={quiz.data.logo}></img>
                </div>
            {
                questions.map(question => <Question
                     key={question.id}
                    questions={question}
                ></Question>)
             }
        </div>
    );
};

export default Quiz;