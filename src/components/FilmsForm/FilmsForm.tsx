import React, { useState } from 'react';
import { Film, FilmMutation } from '../../types';

interface Props {
  onSubmit: (film: Film) => void;
}

const initialState: FilmMutation = {
  name: '',
};

const FilmsForm: React.FC<Props> = ({ onSubmit }) => {
  const [FilmMutation, setFilmMutation] = useState<FilmMutation>(initialState);

  const changeUser = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFilmMutation((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    onSubmit({
      id: Math.random().toString(),
      ...FilmMutation,
    });

    setFilmMutation(initialState);
  };

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="name">Название фильма</label>
        <input
          type="text"
          id="name"
          name="name"
          value={FilmMutation.name}
          className="form-control"
          onChange={changeUser}
        />
        <button type="submit" className="btn  btn-primary mt-2">
          Add film
        </button>
      </form>
    </>
  );
};

export default FilmsForm;
