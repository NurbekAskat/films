import React, { useState } from 'react';
import { Film, FilmMutation } from '../../types';

interface Props {
  film: Film;
  onDelete: React.MouseEventHandler;
}

const FilmItem: React.FC<Props> = ({ film, onDelete }) => {
  const [FilmMutation, setFilmMutation] = useState<FilmMutation>({
    name: film.name,
  });

  const changeUser = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilmMutation((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div className="card mb-2 p-3">
      <input
        name="name"
        value={FilmMutation.name}
        onChange={changeUser}
        className="form-control"
      />
      <button onClick={onDelete} className="btn btn-light mt-2">
        Delete
      </button>
    </div>
  );
};

export default FilmItem;
