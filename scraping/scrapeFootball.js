let fetch = require('node-fetch');
let cheerio = require('cheerio');


function getHeightInInches(heightStr) {
  let matchData = heightStr.match(/(\d+)'(\d+)"/);

  return Number(matchData[1]) * 12 + Number(matchData[2]);
}

async function main() {
  let url = 'https://davidsonwildcats.com/sports/football/roster/2019';

  let Knex = require('knex');
  let knex = Knex({
    client: 'pg',
    connection: {
      database: 'wildcat_roster',
    },
   });

  // fetch(url)
  // .then(data => data.text())
  // .then(text => cheerio.load(text))
  // .then($ => {

  //   return $('.sidearm-roster-players .sidearm-roster-player')
  //     .map((i, playerListItem) => {
  //       return {
  //         name: $(playerListItem).find('.sidearm-roster-player-name p a').text().trim(),
  //         position: $(playerListItem).find('.sidearm-roster-player-position-long-short.hide-on-small-down').text().trim(),
  //         weight: Number($(playerListItem).find('.sidearm-roster-player-weight').text().trim().replace(' lbs', '')),
  //         height: getHeightInInches($(playerListItem).find('.sidearm-roster-player-height').text().trim())
  //       }
  //     });
  // })
  // .then(res => console.log(Array.from(res)));

  let text = await fetch(url).then(data => data.text());

  let $ = cheerio.load(text);

  let playerData = Array.from($('.sidearm-roster-players .sidearm-roster-player').map((i, playerListItem) => {
    return {
      name: $(playerListItem).find('.sidearm-roster-player-name p a').text().trim(),
      team: 'football',
      position: $(playerListItem).find('.sidearm-roster-player-position-long-short.hide-on-small-down').text().trim(),
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
  // for (let player of playerData) {
  //    await knex('football_players').insert(player);
  //  }

  //  await knex.destroy();
}


main();
