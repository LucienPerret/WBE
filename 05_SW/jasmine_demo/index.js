const Player = require('./lib/jasmine_examples/Player.js')
const Song = require('./lib/jasmine_examples/Song.js')

let player = new Player()
let song = new Song('Dior 2001')
player.play(song)

console.log(player.isPlaying)
