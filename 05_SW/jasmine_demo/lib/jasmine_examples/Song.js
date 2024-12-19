class Song {
  titel
  constructor(titel) {
    this.titel = titel
  }
  persistFavoriteStatus(value) {
    // something complicated
    throw new Error('not yet implemented');
  }
}

module.exports = Song;
