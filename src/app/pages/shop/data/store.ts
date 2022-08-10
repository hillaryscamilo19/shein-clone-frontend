export  class IProducto {
  _id?: string;
  title: string;
  object: string;
  price: number;
  fechaCreacion?: Date;
  img: string;
  quantity: number = 0;
  completed: boolean = false;


  constructor( _id:string ,title: string, object: string,  price: number,  fechaCreacion: Date, img: string ,quantity: number ,   completed: boolean ){
    this._id = _id;
    this.title = title;
    this.object = object;
    this.fechaCreacion =  fechaCreacion;
    this.price= price;
    this.img = img; 
    this.quantity = quantity;
    this.completed = completed;
  }
}
