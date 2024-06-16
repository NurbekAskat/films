import { useState } from 'react';
import JokesItem from '../../components/JokesItem/JokesItem';

const Jokes = () => {
  const [joke, setJoke] = useState<string>('');

  const fetchJoke = async () => {
    const url = 'https://api.chucknorris.io/jokes/random';
    const response = await fetch(url);
    const data = await response.json();
    const newJoke = data.value;
    setJoke(newJoke);
  };

  const handleNewJoke = () => {
    fetchJoke();
  };

  return (
    <div className="mt-5">
      <h1>Random Joke</h1>
      <JokesItem joke={joke} />
      <button onClick={handleNewJoke} className="btn btn-primary">
        New Joke
      </button>
    </div>
  );
};

export default Jokes;
