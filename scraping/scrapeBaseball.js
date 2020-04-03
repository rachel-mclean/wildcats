let fetch = require('node-fetch');
let cheerio = require('cheerio');


function getHeightInInches(heightStr) {
  let matchData = heightStr.match(/(\d+)'(\d+)"/);

  return Number(matchData[1]) * 12 + Number(matchData[2]);
}

async function main() {
  let url = 'https://davidsonwildcats.com/sports/baseball/roster';

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
      team: 'Baseball',
      position: $(playerListItem).find('.sidearm-roster-player-position .text-bold').text().trim(),
      bat_and_throw_hand: $(playerListItem).find('.sidearm-roster-player-custom1').text().trim(),
      weight: Number($(playerListItem).find('.sidearm-roster-player-weight').text().trim().replace(' lbs', '')),
      height: $(playerListItem).find('.sidearm-roster-player-height').text().trim(),
      jersey_number: Number($(playerListItem).find('.sidearm-roster-player-jersey-number').text().trim()),
      academic_year: $(playerListItem).find('.hide-on-medium-down .sidearm-roster-player-academic-year').text().trim(),
      hometown: $(playerListItem).find('.hide-on-medium-down .sidearm-roster-player-hometown').text().trim(),
      highschool: $(playerListItem).find('.hide-on-medium-down .sidearm-roster-player-highschool').text().trim(),
      image_url: 'https://davidsonwildcats.com/' + $(playerListItem).find('.lazyload').attr('data-src')
    };
  }));

   console.log(playerData);
  //  for (let player of playerData) {
  //    await knex('baseball_players').insert(player);
  //  }

  //  await knex.destroy();
}


main();
