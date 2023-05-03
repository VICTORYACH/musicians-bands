const { sequelize } = require('./db');
const { Band, Musician, Song } = require('./index')


beforeAll(async () => {
    // the 'sync' method will create tables based on the model class
    // by setting 'force:true' the tables are recreated each time the 
    // test suite is run
    await sequelize.sync({ force: true });
})
describe('Band model', () => {
    it('can create a new Band', async () => {
      const band = await Band.create({ name: 'The Beatles', genre: 'Rock' });
      expect(band.name).toBe('The Beatles');
      expect(band.genre).toBe('Rock');
    });
  
    it('can update a Band instance', async () => {
      const band = await Band.create({ name: 'The Rolling Stones', genre: 'Rock' });
      await band.update({ genre: 'Blues Rock' });
      expect(band.genre).toBe('Blues Rock');
    });
  
    it('can delete a Band instance', async () => {
      const band = await Band.create({ name: 'Led Zeppelin', genre: 'Rock' });
      await band.destroy();
      const deletedBand = await Band.findOne({ where: { name: 'Led Zeppelin' } });
      expect(deletedBand).toBeNull();
    });
  });
  
  describe('Musician model', () => {
    it('can create a new Musician', async () => {
      const musician = await Musician.create({ name: 'Jimi Hendrix', instrument: 'Guitar' });
      expect(musician.name).toBe('Jimi Hendrix');
      expect(musician.instrument).toBe('Guitar');
    });
  
    it('can update a Musician instance', async () => {
      const musician = await Musician.create({ name: 'John Bonham', instrument: 'Drums' });
      await musician.update({ instrument: 'Percussion' });
      expect(musician.instrument).toBe('Percussion');
    });
  
    it('can delete a Musician instance', async () => {
      const musician = await Musician.create({ name: 'Freddie Mercury', instrument: 'Vocals' });
      await musician.destroy();
      const deletedMusician = await Musician.findOne({ where: { name: 'Freddie Mercury' } });
      expect(deletedMusician).toBeNull();
    });
  });
  
  describe('Song model', () => {
    it('can create a new Song', async () => {
      const song = await Song.create({ title: 'Stairway to Heaven', year: 1971, length: 480 });
      expect(song.title).toBe('Stairway to Heaven');
      expect(song.year).toBe(1971);
      expect(song.length).toBe(480);
    });
  
    it('can update a Song instance', async () => {
      const song = await Song.create({ title: 'Bohemian Rhapsody', year: 1975, length: 354 });
      await song.update({ length: 367 });
      expect(song.length).toBe(367);
    });
  
    it('can delete a Song instance', async () => {
      const song = await Song.create({ title: 'Imagine', year: 1971, length: 181 });
      await song.destroy();
      const deletedSong = await Song.findOne({ where: { title: 'Imagine' } });
      expect(deletedSong).toBeNull();
    });
  });