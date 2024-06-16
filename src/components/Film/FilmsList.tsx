import React from 'react';
import { Film } from '../../types';
import FilmItem from './FilmItem';

interface Props {
  films: Film[];
  onDelete: (id: string) => void;
}

const FilmsList: React.FC<Props> = ({ films, onDelete }) => {
  return (
    <div>
      <h4>Films</h4>
      {films.map((film) => (
        <FilmItem
          key={film.id}
          film={film}
          onDelete={() => onDelete(film.id)}
        />
      ))}
    </div>
  );
};

export default FilmsList;
