export class Game {
  constructor(baseDeck, deckSize, playerCount = 2, players = [{ name: 'Player1', id: '999' }, { name: 'Player 2', id: '999' }], id = 999) {
    this.id = id
    this.players = []
    this.heap = []
    this.gameLog = []
    this.running = true
    this.currentDiscipline = ''

    // create players
    this.players.push(new Player(players[0].name, players[0].id))
    this.players.push(new Player(players[1].name, players[1].id))

    // deal cards
    const heroes = baseDeck.map(card => card.data)
    const included = []
    this.players.forEach((player) => {
      while (player.deck.length < deckSize) {
        const include = Math.floor(Math.random() * heroes.length)
        if (!included.includes(include)) {
          player.deck.push(heroes[include])
          included.push(include)
        }
      }
    })

    // determine initiative
    Math.random() < 0.5
      ? this.players[0].initiative = false
      : this.players[1].initiative = false

    if (playerCount === 0) {
      this.players[0].bot = true
      this.players[1].bot = true
    }
    else if (playerCount === 1) {
      this.players[1].bot = true
    }
  }

  static handleCombat(discipline, game) {
    const stats1 = game.players[0].deck[0].powerstats
    const stats2 = game.players[1].deck[0].powerstats

    const p1 = game.players[0]
    const p2 = game.players[1]

    const result = stats1[discipline] - stats2[discipline]
    const hero1 = p1.deck[0]
    const hero2 = p2.deck[0]

    let winner = 0
    game.currentDiscipline = ''
    // TODO: refactor with result from determineWinner:
    if (result > 0) {
      p1.initiative = true
      p2.initiative = false
      winner = 1
      p1.deck.push(game.players[0].deck.shift())
      p1.deck.push(game.players[1].deck.shift())
      if (p1.deck.length === 0 || p2.deck.length === 0)
        game.running = false
      p1.deck = p1.deck.concat(game.heap)
      game.heap.length = 0
    }
    else if (result < 0) {
      p1.initiative = false
      p2.initiative = true
      winner = 2
      p2.deck.push(game.players[0].deck.shift())
      p2.deck.push(game.players[1].deck.shift())
      if (p1.deck.length === 0 || p2.deck.length === 0)
        game.running = false
      p2.deck = p2.deck.concat(game.heap)
      game.heap.length = 0
    }
    else {
      if (p1.initiative === true) {
        p1.initiative = false
        p2.initiative = true
      }
      else {
        p1.initiative = true
        p2.initiative = false
      }
      game.heap.push(p1.deck.shift())
      game.heap.push(p1.deck.shift())
      if (p1.deck.length === 0 || p2.deck.length === 0)
        game.running = false
      game.heap.push(p2.deck.shift())
      game.heap.push(p2.deck.shift())
      if (p1.deck.length === 0 || p2.deck.length === 0)
        game.running = false
    }
    game.gameLog.push({
      hero1: hero1.name,
      hero2: hero2.name,
      discipline,
      value1: stats1[discipline],
      value2: stats2[discipline],
      winner,
    })
  }

  static chooseDiscipline(player) {
    const stats = player.deck[0].powerstats
    const disciplines = Object.keys(stats)
    const values = Object.values(stats)
    const max = Math.max(...values)
    const maxIndex = values.indexOf(max)
    return disciplines[maxIndex]
  }
}
class Player {
  constructor(name, id = 999) {
    this.name = name
    this.deck = []
    this.initiative = true
    this.bot = false
    this.id = id
  }
}

