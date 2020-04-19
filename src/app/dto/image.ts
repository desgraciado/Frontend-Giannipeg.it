export class Image {
  id: number;
  title: string;
  type: string;
  name: string;
  thumbnail: string;


  constructor ( title: string, type: string, name: string, thumbnail: string ) {
      this.title = title;
      this.type = type;
      this.name = name;
      this.thumbnail = thumbnail;
  }
}
