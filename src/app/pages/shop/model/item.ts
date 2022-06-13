import { ShopComponent } from "../shop.component";

export interface Store{
    id: number;
    precio: number;
    estado: EstadoPedido;
    completed: boolean;
    fecha: Date;
    producto: ProductoPedido;

}

interface ProductoPedido {
    producto: ShopComponent;
    cantidad: number;
}

export type EstadoPedido = 'enviado'  | 'visto' | 'camino' | 'entregado';