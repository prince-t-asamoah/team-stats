const team = {
  _players: [
    {
      firstName: 'Romelu',
      lastName: 'Lukaku',
      age: 28
    },
    {
      firstName: 'Edouard',
      lastName: 'Mendy',
      age: 29
    },
    {
      firstName: 'Ngolo',
      lastName: 'Kante',
      age: 30
    }
  ],
  _games:[
    {
      opponent: 'Newcastle',
      teamPoints: 3,
      opponentPoints: 0
    },
    {
      opponent: 'Malmo',
      teamPoints: 1,
      opponentPoints: 0
    },
    {
      opponent: 'Burnley',
      teamPoints: 1,
      opponentPoints: 1
    }
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(firstName, lastName, age) {
    const player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    }
    this._players.push(player);
  },
  addGame(opponent, teamPoints, opponentPoints) {
    const game = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints
    }
    this._games.push(game);
  }
}
team.addPlayer('Callum', 'Hudson-Odoi', 21);
team.addPlayer('Malang', 'Starr', 22);
team.addPlayer('Antonio', 'Rudiger', 28);
team.addPlayer('Trevor', 'Chalobah', 22);

team.addGame('Leicester City', 2, 2);
team.addGame('Juventus', 0, 2);
team.addGame('Manchester United', 5, 2);

console.log(team._players);
console.log(team._games);
