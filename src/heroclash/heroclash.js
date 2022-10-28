export class Game {
  constructor(mode, baseDeck, deckSize, playerCount = 2, playerIds = ['Player 1', 'Player 2']) {
    this.mode = mode
    this.players = []
    this.heap = []
    this.gameLog = []
    this.running = true

    // create players
    this.players.push(new Player(playerIds[0]))
    this.players.push(new Player(playerIds[1]))

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

  handleCombat(discipline) {
    const stats1 = this.players[0].deck[0].powerstats
    const stats2 = this.players[1].deck[0].powerstats

    const p1 = this.players[0]
    const p2 = this.players[1]

    const result = stats1[discipline] - stats2[discipline]
    const hero1 = p1.deck[0].id
    const hero2 = p2.deck[0].id

    let winner = 0
    const initiative = p1.initiative ? 1 : 2
    // TODO: refactor with result from determineWinner:
    if (result > 0) {
      winner = 1
      p1.deck.push(this.players[0].deck.shift())
      p1.deck.push(this.players[1].deck.shift())
      p1.deck = p1.deck.concat(this.heap)
      this.heap.length = 0
      p1.initiative = true
      p2.initiative = false
    }
    else if (result < 0) {
      winner = 2
      p2.deck.push(this.players[0].deck.shift())
      p2.deck.push(this.players[1].deck.shift())
      p2.deck = p2.deck.concat(this.heap)
      this.heap.length = 0
      p1.initiative = false
      p2.initiative = true
    }
    else {
      this.heap.push(p1.deck.shift())
      this.heap.push(p1.deck.shift())
      this.heap.push(p2.deck.shift())
      this.heap.push(p2.deck.shift())
      if (p1.initiative === true) {
        p1.initiative = false
        p2.initiative = true
      }
      else {
        p1.initiative = true
        p2.initiative = false
      }
    }
  }
}
class Player {
  constructor(name) {
    this.name = name
    this.deck = []
    this.initiative = true
    this.bot = false
  }
}

