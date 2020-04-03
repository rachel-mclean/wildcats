let Router = require('express-promise-router');
let router = new Router();

let Player = require('./models/Player');

router.get('/', async(request, response) => {
  response.render('main', { players: [] });
});

router.get('/search', async(request, response) => {
  // want to retrieve search term from page
  let searchTerm = request.query.term;
  console.log('Searching wildcats with term: ', searchTerm);
  // make query for similar results from SQL database

  let players = await Player.query().where('name', 'ilike', `%${searchTerm}%`);

  // Render the page with the results
  response.render('main', { players, searchTerm });
});

router.post('/new', async(request, response) => {
  let newPlayer = request.body.new.toLowerCase().trim();
  try {

    await Player.query().insert({
      player: newPlayer
    });

    response.redirect(`/search?term=${newPlayer}`);
  } catch {
    response.redirect('/');
  }
});

module.exports = router;
