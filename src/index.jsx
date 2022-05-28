import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { Joke } from './Joke';
import { jokes } from './Joke/jokes.js';

const App = () => {
  return (
    <div className="container">
      {jokes.map((joke) => (
        <Joke
          key={joke.id}
          userAvatar={joke.avatar}
          userName={joke.name}
          text={joke.text}
          likes={joke.likes}
          dislikes={joke.dislikes}
        />
      ))}
    </div>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
