export class Repository {
  constructor(public id: number, public name: string, public html_url: string, public description: string) {
      this.id = id;
      this.name = name;
      this.html_url = html_url;
      this.description = description;
      
  }
}
