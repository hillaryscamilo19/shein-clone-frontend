export  class IProducto {
  _id?: number;
  title: string;
  object: string;
  price: number;
  fechaCreacion: Date;
  img: string;

  constructor(title: string, object: string,  price: number,  fechaCreacion: Date,img: string ){
    this.title = title;
    this.object = object;
    this.fechaCreacion =  fechaCreacion;
    this.price= price;
    this.img = img;
    
  }
}
