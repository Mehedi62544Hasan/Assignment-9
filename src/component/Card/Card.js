import { ArrowRightIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css'

const Card = ({ qusn }) => {
  // conso/le.log(qusn)
  const { id, name, logo, total } = qusn
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

          <Link to={`/quiz/${id}`}>
                  <a href="#_" class="relative ml-11 text-center px-5 py-2 font-medium text-white group">
                  <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-500 group-hover:bg-purple-700 group-hover:skew-x-12"></span>
                  <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700 group-hover:bg-purple-500 group-hover:-skew-x-12"></span>
                  <span class="absolute bottom-0 left-0 hidden w-full h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
                  <span class="absolute bottom-0 right-0 hidden w-full h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
                  <span class="relative">Go Quiz</span>
                  </a>
          </Link>
        </div>
      </div>
    </div>
  );
};
 
export default Card;