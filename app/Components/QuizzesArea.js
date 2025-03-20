import React from 'react';
import QuizCard from './QuizCard';

function QuizzesArea(props) {
    return (
        <div className="poppins mx-12 mt-10">
            <h2 className="text-xl font-bold">My Quizzes</h2>
            <div className="mt-6 flex gap-2 flex-wrap">
                <QuizCard />
                <QuizCard />
                <QuizCard />
            </div>
    </div>
    );
}

export default QuizzesArea;