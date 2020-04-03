CREATE TABLE football_players (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  position TEXT NOT NULL,
  height TEXT NOT NULL,
  weight INTEGER NOT NULL,
  jersey_number INTEGER NOT NULL,
  academic_year TEXT NOT NULL,
  hometown TEXT NOT NULL,
  highschool TEXT NOT NULL,
  image_url TEXT NOT NULL,
  team TEXT NOT NULL
);

CREATE TABLE womens_basketball_players (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  position TEXT NOT NULL,
  height TEXT NOT NULL,
  jersey_number INTEGER NOT NULL,
  academic_year TEXT NOT NULL,
  hometown TEXT NOT NULL,
  highschool TEXT NOT NULL,
  image_url TEXT NOT NULL,
  team TEXT NOT NULL
);

CREATE TABLE mens_basketball_players (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  position TEXT NOT NULL,
  height TEXT NOT NULL,
  weight INTEGER NOT NULL,
  jersey_number INTEGER NOT NULL,
  academic_year TEXT NOT NULL,
  hometown TEXT NOT NULL,
  highschool TEXT NOT NULL,
  image_url TEXT NOT NULL,
  team TEXT NOT NULL
);

CREATE TABLE womens_soccer_players (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  position TEXT NOT NULL,
  height TEXT NOT NULL,
  jersey_number INTEGER NOT NULL,
  academic_year TEXT NOT NULL,
  hometown TEXT NOT NULL,
  highschool TEXT NOT NULL,
  image_url TEXT NOT NULL,
  team TEXT NOT NULL
);

CREATE TABLE mens_soccer_players (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  position TEXT NOT NULL,
  height TEXT NOT NULL,
  weight INTEGER NOT NULL,
  jersey_number INTEGER NOT NULL,
  academic_year TEXT NOT NULL,
  hometown TEXT NOT NULL,
  highschool TEXT NOT NULL,
  soccer_club TEXT NOT NULL,
  image_url TEXT NOT NULL,
  team TEXT NOT NULL
);

CREATE TABLE womens_swimming_players (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  position TEXT NOT NULL,
  academic_year TEXT NOT NULL,
  hometown TEXT NOT NULL,
  highschool TEXT NOT NULL,
  image_url TEXT NOT NULL,
  team TEXT NOT NULL
);

CREATE TABLE mens_swimming_players (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  position TEXT NOT NULL,
  academic_year TEXT NOT NULL,
  hometown TEXT NOT NULL,
  highschool TEXT NOT NULL,
  image_url TEXT NOT NULL,
  team TEXT NOT NULL
);

CREATE TABLE womens_track_and_field_players (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  position TEXT NOT NULL,
  academic_year TEXT NOT NULL,
  hometown TEXT NOT NULL,
  highschool TEXT NOT NULL,
  image_url TEXT NOT NULL,
  team TEXT NOT NULL
);

CREATE TABLE baseball_players (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  position TEXT NOT NULL,
  bat_and_throw_hand TEXT NOT NULL,
  height TEXT NOT NULL,
  weight INTEGER NOT NULL,
  jersey_number INTEGER NOT NULL,
  academic_year TEXT NOT NULL,
  hometown TEXT NOT NULL,
  highschool TEXT NOT NULL,
  image_url TEXT NOT NULL,
  team TEXT NOT NULL
);

CREATE TABLE field_hockey_players (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  position TEXT NOT NULL,
  jersey_number INTEGER NOT NULL,
  academic_year TEXT NOT NULL,
  hometown TEXT NOT NULL,
  highschool TEXT NOT NULL,
  image_url TEXT NOT NULL,
  team TEXT NOT NULL
);

CREATE TABLE lacrosse_players (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  height TEXT NOT NULL,
  position TEXT NOT NULL,
  jersey_number INTEGER NOT NULL,
  academic_year TEXT NOT NULL,
  hometown TEXT NOT NULL,
  highschool TEXT NOT NULL,
  image_url TEXT NOT NULL,
  team TEXT NOT NULL
);

CREATE TABLE womens_tennis_players (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  height TEXT NOT NULL,
  academic_year TEXT NOT NULL,
  hometown TEXT NOT NULL,
  highschool TEXT NOT NULL,
  image_url TEXT NOT NULL,
  team TEXT NOT NULL
);

CREATE TABLE mens_tennis_players (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  height TEXT NOT NULL,
  weight INTEGER NOT NULL,
  jersey_number INTEGER NOT NULL,
  academic_year TEXT NOT NULL,
  hometown TEXT NOT NULL,
  highschool TEXT NOT NULL,
  image_url TEXT NOT NULL,
  team TEXT NOT NULL
);

CREATE TABLE volleyball_players (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  height TEXT NOT NULL,
  position TEXT NOT NULL,
  jersey_number INTEGER NOT NULL,
  academic_year TEXT NOT NULL,
  hometown TEXT NOT NULL,
  highschool TEXT NOT NULL,
  image_url TEXT NOT NULL,
  team TEXT NOT NULL
);

CREATE TABLE golf_players (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  academic_year TEXT NOT NULL,
  hometown TEXT NOT NULL,
  highschool TEXT NOT NULL,
  image_url TEXT NOT NULL,
  team TEXT NOT NULL
);

CREATE TABLE wrestling_players (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  height TEXT NOT NULL,
  weight INTEGER NOT NULL,
  academic_year TEXT NOT NULL,
  hometown TEXT NOT NULL,
  highschool TEXT NOT NULL,
  image_url TEXT NOT NULL,
  team TEXT NOT NULL
);

CREATE TABLE all_players (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  position TEXT,
  bat_and_throw_hand TEXT,
  height TEXT,
  weight INTEGER,
  jersey_number INTEGER,
  academic_year TEXT NOT NULL,
  hometown TEXT NOT NULL,
  highschool TEXT NOT NULL,
  image_url TEXT NOT NULL,
  team TEXT NOT NULL
);
