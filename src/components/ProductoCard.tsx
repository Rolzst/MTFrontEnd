import {FaCartShopping} from "react-icons/fa6";

type Props = {
    imagen: string;
    nomProd: string;
    precio: number;
}

function ProductoCard({imagen, nomProd, precio}: Props) {
    return (
        <div className={'w-1/5 pt-4'}>
            <div>
                <img className={'rounded-3xl'} src={imagen} alt="La imagen no existe"/>
            </div>
            <div className={'text-2xl flex flex-row justify-between py-5'}>
                {nomProd}
                <FaCartShopping />
            </div>
            <div>
                $ {precio}
            </div>
        </div>
    );
}

export default ProductoCard;
