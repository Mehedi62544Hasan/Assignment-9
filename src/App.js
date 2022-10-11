 import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Chart from './component/Chart/Chart';
import Home from './component/Home/Home';
import Quiz from './component/Quiz/Quiz';
import Main from './layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children:[
        {
          path: '/',
          loader: async () => {
            return fetch ('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Home></Home>
        },
        {
          path: '/quiz/:quizId',
          loader: async ({params})=>{
            return fetch(` https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
          },
          element: <Quiz></Quiz>
        },
        {
          path: '/statistics',
          loader: async () => {
            return fetch ('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Chart></Chart>
        },
        {
          path: '/about',
          element: <About></About>
        }
      ]
    }
  ]);
  return (
    <div className="App">
        <RouterProvider router={router}></RouterProvider>
     </div>
  );
}

export default App;
