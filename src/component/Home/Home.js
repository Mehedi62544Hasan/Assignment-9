import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../Card/Card';
import HeaderImg from '../HeaderImg/HeaderImg';

const Home = () => {
    const quiz = useLoaderData();
    const qusns = quiz.data
    return (
        <div>
             <div>
                <HeaderImg></HeaderImg>
             </div>
            <div>
                 {
                    qusns.map(qusn => <Card
                        key={qusn.id}
                        qusn ={qusn}
                    ></Card>)
                 }
            </div>
         </div>
        
    );
};

export default Home;