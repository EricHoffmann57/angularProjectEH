export class Game {
  id?: string;
  title: string;
  type: string;
  editor: string;
  developer: string;
  platform: string;
  artwork: string;
  releaseDate: string;
  ost: string;
  description: string;
  playtime: string;
  ranking: string;
  favorite: boolean;



  constructor() {

    this.title = '';
    this.type = '';
    this.editor = '';
    this.developer = '';
    this.platform = '';
    this.artwork = '';
    this.releaseDate = '';
    this.ost = '';
    this.description = '';
    this.playtime = '';
    this.ranking = '';
    this.favorite = true;
  }
}
