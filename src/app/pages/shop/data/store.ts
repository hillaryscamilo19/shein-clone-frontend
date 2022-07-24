export  class IProducto {
  _id?: string;
  title: string;
  object: string;
  price: number;
  fechaCreacion: Date;
  img: string;

  constructor( _id:string,title: string, object: string,  price: number,  fechaCreacion: Date,img: string ){
    this._id = _id;
    this.title = title;
    this.object = object;
    this.fechaCreacion =  fechaCreacion;
    this.price= price;
    this.img = img;
    
  }
}
