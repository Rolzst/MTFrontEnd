export type Tarjetas = {
    _id: string;
    nombre: string;
    noTarjeta: number;
    fechaVencimiento: number;
    cvc: number;
}

export type User = {
    _id: string;
    email: string;
    tarjetas: Tarjetas[];
}

export type Product = {
    nombre: string;
    descripcion: string;
    precio: number;
}