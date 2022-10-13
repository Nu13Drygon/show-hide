import React, { useState } from 'react';
import './App.css';
import data from './data';
import Question from './Questions';

function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className="container">
        <div>
          <h3 className='h3-header'>Questions and answers about login</h3>
        </div>
        <section>
          <div className='pure-g'>
            {questions.map(items => {
              return <Question key={items.id} {...items} />
            })}
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
