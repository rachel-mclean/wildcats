let { Model, snakeCaseMappers } = require('objection');

class Player extends Model {
  static get columnNameMappers() {
    return snakeCaseMappers();
  }

  static get tableName() {
    return 'football_players';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: [
        'name'
      ],
      properties: {
        id: {type: 'integer'},
        body: {type: 'string'},
        height: {type: 'string'},
        weight: {type: 'string'},
        position: {type: ['string', 'null']},
        jersey_number: {type: ['integer', 'null']},
        academic_year: {type: 'string'},
        highschool: {type: 'string'},
        hometown: {type: 'string'},
        team: {type: 'string'},
        image_url: {type: 'string'},
        // bat_and_throw_hand: {type: ['string', 'null']}
      }
    }
  }
}

module.exports = Player;
