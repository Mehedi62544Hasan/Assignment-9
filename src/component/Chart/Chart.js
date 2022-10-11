import React from 'react';
 import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const Chart = () => {
   const data = [
    {name: 'React', uv: 8},
    {name: 'JavaScript', uv: 9},
    {name: 'Css', uv: 8},
    {name: 'Git', uv: 11},
]
     
    return (
     <div className='grid h-screen place-items-center'>
    <LineChart className='' width={350} height={250} data={data}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
  </LineChart>
     </div>
    );
};

export default Chart;