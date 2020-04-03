# wildcats

1. Parse the roster HTML pages to get the data you want (in the format you want)
2. Design a database schema to hold the roster data
3. Write a script to scrape the right URLs and populate the database
4. Build a web application that uses the database to display your own version(s) of the roster

## Schema Ideas

```sql
CREATE TABLE sports (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
);

-- (1, 'Football'), (2, 'Baseball')

CREATE TABLE coaches (
  id SERIAL PRIMARY KEY,
);

CREATE TABLE players (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  sport_id INTEGER NOT NULL REFERENCS sports(id),
);

CREATE TABLE baseball_attributes (
  id SERIAL PRIMARY KEY,
  player_id INTEGER NOT NULL REFERENCES players(id),
  obp FLOAT NOT NULL,
)
```
