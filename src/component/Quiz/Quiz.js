import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Quiz.css'

const Quiz = () => {
    const quiz = useLoaderData();
    console.log(quiz.data.questions)
    return (
        <div>
            this iss qiuz
        </div>
    );
};

export default Quiz;