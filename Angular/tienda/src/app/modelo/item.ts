
export class Item {
  categoria: any;
  id: any;
  name: any;
  description: any;
  image: any;
  price: any;

  constructor(id, name, description, image, price, categoria) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.image = image;
    this.price = price;
    this.categoria = categoria;
  }

}


