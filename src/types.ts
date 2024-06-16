export interface Film {
  name: string;
  id: string;
}

export interface FilmMutation {
  name: string;
}

export interface Joke {
  categories: [];
  created_a: string;
  icon_url: string;
  id: string;
  updated_at: string;
  url: string;
  value: string;
}

export interface simpleJoke {
  value: string;
  id: string;
}
