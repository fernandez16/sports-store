export class Product{

  // Works like a Java POJO
  // Arguments with public visibility are considered attributes
  // name? means the attribute is optional
  constructor(
    public id?: number,
    public name?: string,
    public category?: string,
    public price?: number,
    public description?: string
  ){}

}
