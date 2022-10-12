import React from 'react';
import './Question.css'
import Swal from 'sweetalert2'
import { EyeIcon } from '@heroicons/react/24/solid'

const Question = ({questions}) => {
     const {question, options, correctAnswer } = questions;

    const seeAns = options =>{
        const ans = options.find(option => option === correctAnswer)
        Swal.fire(`${ans}`)
    }
      const curectAns = (option) =>{
        if(option === correctAnswer){
            Swal.fire(
                'Good Job!',
                'Your Answer is Correct!!',
                'success'
              )
        }
        else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Wrong Answer!!',
               })
        }
    }
    return (
        <div className='question-container lg:mx-52 my-14'>
           <div className=' mb-8 relative'>
           <h1 className='question lg:text-xl lg:font-bold mx-12 m-3'>{question}</h1>
           <EyeIcon onClick={()=> seeAns(options)} className="h-8 w-8 ml-3  absolute top-0 right-2 hover:text-fuchsia-600"/>
           </div>
          <div className='option md:grid md:grid-cols-2 gap-4'>
          {
            options.map(option =>  <p key={option} className='bg-blue-400 hover:bg-fuchsia-500 text-white rounded-3xl .lg:font-bold lg:text-xl mb-3 lg:mx-14 p-4' onClick={() => curectAns(option)}>{option}</p>)
           } 
           </div>           
        </div>
    );
};

export default Question;