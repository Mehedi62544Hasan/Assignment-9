import { ArrowRightIcon } from '@heroicons/react/24/solid';
import React from 'react';
import './Card.css'
 
const Card = ({qusn}) => {
    console.log(qusn)
    const {id, name, logo, total} = qusn
    return (
        <div className="mb-8 max-w-xl mx-auto rounded-md shadow-md bg-fuchsia-100 dark:text-blue-500">
        <img
          src={logo}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-64 dark:bg-indigo-200"
        />
        <div className="text-start p-6 ">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
          </div>
          <div>
            <p className="my-5 ">
              Total quiz: {total}
            </p>
            <button className='btn-quiz flex items-center justify-center'>Go Quiz <span><ArrowRightIcon className="h-5 w-5 ml-4 text-bold "/></span></button>
          </div>
        </div>
      </div>
);
};










   
  

export default Card;