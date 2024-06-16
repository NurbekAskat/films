import { useState } from 'react';
import { Film } from '../../types';
import FilmsForm from '../../components/FilmsForm/FilmsForm';
import FilmsList from '../../components/Film/FilmsList';

const Films = () => {
  const [films, setFilms] = useState<Film[]>([
    { id: '1', name: 'Deadpool' },
    { id: '2', name: 'Bad boys' },
    { id: '3', name: 'The Matrix' },
  ]);

  const addUser = (film: Film) => {
    setFilms((prev) => [...prev, film]);
  };

  const deleteFilm = (id: string) => {
    setFilms((prev) => {
      return prev.filter((film) => film.id !== id);
    });
  };

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-6">
          <FilmsForm onSubmit={addUser} />
        </div>
        <div className="col-6">
          <FilmsList films={films} onDelete={deleteFilm} />
        </div>
      </div>
    </div>
  );
};

export default Films;
