export  class IProducto {
  _id?: string;
  title: string;
  object: string;
  price: number;
  fechaCreacion?: Date;
  img: string;
  quantity: number


  constructor( _id:string ,title: string, object: string,  price: number,  fechaCreacion: Date, img: string ,quantity: number){
    this._id = _id;
    this.title = title;
    this.object = object;
    this.fechaCreacion =  fechaCreacion;
    this.price= price;
    this.img = img; 
    this.quantity = quantity;
  }
}
