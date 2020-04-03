let fetch = require('node-fetch');
let cheerio = require('cheerio');


function getHeightInInches(heightStr) {
  let matchData = heightStr.match(/(\d+)'(\d+)"/);

  return Number(matchData[1]) * 12 + Number(matchData[2]);
}

async function main() {
  let url = 'https://davidsonwildcats.com/sports/mens-tennis/roster';

  let Knex = require('knex');
  let knex = Knex({
    client: 'pg',
    connection: {
      database: 'wildcat_roster',
    },
   });

  let text = await fetch(url).then(data => data.text());

  let $ = cheerio.load(text);

  let playerData = Array.from($('.sidearm-roster-players .sidearm-roster-player').map((i, playerListItem) => {
    return {
      name: $(playerListItem).find('.sidearm-roster-player-name p a').text().trim(),
      team: "Men's Tennis",
      height: $(playerListItem).find('.sidearm-roster-player-height').text().trim(),
      weight: Number($(playerListItem).find('.sidearm-roster-player-weight').text().trim().replace(' lbs', '')),
      academic_year: $(playerListItem).find('.hide-on-medium-down .sidearm-roster-player-academic-year').text().trim(),
      hometown: $(playerListItem).find('.hide-on-medium-down .sidearm-roster-player-hometown').text().trim(),
      highschool: $(playerListItem).find('.hide-on-medium-down .sidearm-roster-player-highschool').text().trim(),
      image_url: 'https://davidsonwildcats.com' + $(playerListItem).find('.sidearm-roster-player-details .sidearm-roster-player-image img').attr('data-src')
    };
  }));

  console.log(playerData);
  //  for (let player of playerData) {
  //    await knex('mens_tennis_players').insert(player);
  //  }

  //  await knex.destroy();
}


main();
